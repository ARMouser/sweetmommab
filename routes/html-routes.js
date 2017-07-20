var path = require('path');

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

    app.get('/bio', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/bio.html'))
    });
};