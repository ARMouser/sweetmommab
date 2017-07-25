var db = require('../../models');

module.exports = function(app, passport) {
  app.get("/api/products", function(req, res) {
    db.Product.findAll({})
    .then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
      id: req.params.id
      }
    })
    .then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.put('/api/new_products', function(req, res) {
    db.Product.create(req.body).then(function(newProduct) {
      res.json(newProduct)
    })
  })

  app.get('/api/new_orders', function(req, res) {
    db.Order.findAll({
      where: {
        finished: false
      }
    }).then(function(orders) {
      res.json(orders)
    })
  });

  app.put("/api/order/", function(req, res) {
    db.Order.create(req.body).then(function(dbOrder){
      dbOrder.addProducts(products.id);
    });
  });

  app.get("/api/ordered-product", function(req, res) {
    db.Order.findAll({
      where: {
        UserId: req.user.id
      },
      include: {
        model: [db.Product]
      }
    }).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  app.get("/api/recommendations", function(req, res) {
    db.Recommendation.findAll({ 
      limit: 10,
      where: {
        approved: true
      } 
    }).then(function(dbRec) {
      res.json(dbRec);
    });
  });

  app.get("/api/recommendations_approval", function(req, res) {
    db.Recommendation.findAll({
      where: {
        approval: false
      }
    }).then(function(data) {
      res.json(data)
    })
  })

  app.put("/api/save-recommendation", function(req, res) {
    db.Recommendation.create({
      text: req.body.text, 
      UserId: req.user.id   
    }).then(function(hold) {
      res.json(hold);
    })
  })
}


