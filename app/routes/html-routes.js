var path = require('path');

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    app.get('/bio', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/bio.html'))
    });
    app.get('/goodies', function (req, res) {
    	res.sendFile(path.join(__dirname, '../public/goodies.html'))
    })
    app.get('/contact', function (req, res) {
    	res.sendFile(path.join(__dirname, '../public/contact.html'))
    })
    app.get('/recommendations', function (req, res) {
    	res.sendFile(path.join(__dirname, '../public/recommendations.html'))
    })
    // added loggedIn for the next two routes to correspond with passport
    app.get('/order', loggedIn, function (req, res, next) {
    	res.sendFile(path.join(__dirname, '../public/order.html'))

    })
    app.get('/shopping-cart', loggedIn, function (req, res, next) {
    	res.sendFile(path.join(__dirname, '../public/shopping-cart.html'))
    })
    app.get('/order-history', loggedIn, function (req, res, next) {
    	res.sendFile(path.join(__dirname, '../public/order-history.html'))
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