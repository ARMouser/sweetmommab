var path = require('path');

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render("index");
    });

    app.get('/about', function (req, res) {
        res.render("about");
    });
    app.get('/goodies', function (req, res) {
        res.render("goodies");
    })
    app.get('/contact', function (req, res) {
        res.render("contact");
    })
    app.get('/recommendations', function (req, res) {
        res.render("recommendations");
    })
    // added loggedIn for the next two routes to correspond with passport
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
    app.get('profile', function (req, res) {
        if (!req.user) {
            res.redirect("/login")
        } else {
            res.render("profile");
        }
    })
    // this is a boiler plate function for using passport. Not entirely sure on the passport side of things
    function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

};