var path = require('path');
var request = require('request');

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render("index", {user:req.user});
    });

    app.get('/about', function (req, res) {
        res.render("about", {user:req.user});
    });
    app.get('/order', function (req, res) {
        request(req.protocol + '://' + req.get('host') + '/api/products', function(error, response, data){
            if (error) console.log(error);
            res.render("order", {products:data, user:req.user});
        });
    });
    app.get('/contact', function (req, res) {
        res.render("contact", {user:req.user});
    })
    app.get('/recommendations', function (req, res) {
        request(req.protocol + '://' + req.get('host') + '/api/recommendations', function(error, response, data){
            if (error) console.log(error);
            res.render("recommendations", {rec:data, user:req.user});
        });
    });
    app.get('/submitGoodie', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("submitGoodie", {user:req.user});
        }
    })
    app.get('/cart', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            request(req.protocol + "://" +req.get('host') + '/api/ordered-product/' + req.user.id, function(error, response, data){
                if (error) console.log(error);
                data = JSON.parse(data);
                console.log(data[0]);
                res.render("cart", {user:req.user, order:data[0]});
            });
        }
    })
    app.get('/profile', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("profile", {user:req.user});
        }
    })
    app.get('/submitRecommendation', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("submitRecommendation", {user:req.user});
        }
    })

};