var db = require('../../models');
var request = require("request");

module.exports = function(app) {
    app.get("/api/products", function(req, res) {
        db.Product.findAll({})
            .then(function(dbProduct) {
                res.json(dbProduct);
            });
    });


    app.get("/api/products/:name", function(req, res) {
        db.Product.findAll({
            where: {
                name: req.params.name
            }
        }).then(function(items) {
            res.json(items)
        })
    });


    app.post('/api/new_products', function(req, res) {
        db.Product.create(req.body).then(function(newProduct) {
            res.json(newProduct);
        });
    });

    app.get('/api/new_orders', function(req, res) {
        db.Order.findAll({
            where: {
                finished: false
            }
        }).then(function(orders) {
            res.json(orders);
        });
    });

    app.post("/api/order/product/", function(req, res) {
        db.Order.findOrCreate({
            where: {
                UserId: req.body.userid,
                sent: false
            }
        }).then(function(dbOrder) {
            db.Product.findOne({
                where: {
                    id: req.body.productid
                }
            }).then(function(dbProduct) {
                dbProduct.addOrder(dbOrder[0], { through: { quantity: req.body.quantity } });
                res.redirect("/order");
            }).catch(function(err) {
                console.log(err);
            })
        }).catch(function(err) {
            console.log(err);
        });
    });

    app.put("/api/order/checkout", function(req, res) {
        db.Order.update({
            sent: true
        }, {
            where: {
                id: req.body.orderid
            }
        }).then(function(dbOrder) {
            //redirect to payment when implemented
            res.redirect("/");
        }).catch(function(err) {
            console.log(err);
        });
    });

    app.get("/api/ordered-product/:id", function(req, res) {
        db.Order.findAll({
            where: {
                UserId: req.params.id,
                sent: false
            },
            include: {
                model: db.Product
            }
        }).then(function(dbOrder) {
            res.json(dbOrder);
        });
    });

    app.get("/api/order-history/:id", function(req, res) {
        db.Order.findAll({
            where: {
                UserId: req.params.id,
                sent: true
            },
            include: {
                model: db.Product
            }
        }).then(function(dbOrder) {
            console.log(dbOrder);

            res.json(dbOrder);
        });

    });

    app.get("/api/recommendations", function(req, res) {
        db.Recommendation.findAll({
            limit: 10,
            where: {
                approved: true
            },
            include: {
                model: db.User
            }
        }).then(function(dbRec) {
            res.json(dbRec);
        });
    });

    app.get("/api/recommendations-history/:id", function(req, res) {
        db.Recommendation.findAll({
            where: {
                approved: true,
                UserId: req.params.id
            }
        }).then(function(data) {
            console.log(data);
            res.json(data);
        });
    });

    app.get("/api/recommendations_approval", function(req, res) {
        db.Recommendation.findAll({
            where: {
                approved: false
            }
        }).then(function(data) {
            res.json(data)
        });
    });

    app.post("/api/save-recommendation", function(req, res) {
        console.log(req.body.id)
        db.Recommendation.create({
            text: req.body.text,
            UserId: req.body.id,
            approved: true
        }).then(function(hold) {
            res.redirect("/recommendations")
        }).catch(function(err) {
            console.log(err)
        });
    });
};