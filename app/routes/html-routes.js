var path = require('path');
var request = require('request');

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render("index");
    });

    app.get('/about', function (req, res) {
        res.render("about");
    });
    app.get('/order', function (req, res) {
        res.render("order");
    })
    app.get('/contact', function (req, res) {
        res.render("contact");
    })
    app.get('/recommendations', function (req, res) {
        request(req.protocol + '://' + req.get('host') + '/api/recommendations', function(error, response, data){
            if (error) console.log(error);
            res.render("recommendations", {rec:data});
        });
    });
    app.get('/submitGoodie', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("submitGoodie");
        }
    })
    app.get('/cart', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("cart");
        }
    })
    app.get('/profile', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("profile");
        }
    })
    app.get('/submitRecommendation', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("submitRecommendation");
        }
    })

};