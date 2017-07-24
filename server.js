var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require('./models')
var exphbs = require("express-handlebars");
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
var flash = require("connect-flash");

var app = express();
var PORT = process.env.PORT || 4020;

passport.use(new Strategy({
        passReqToCallBack: true
    },
    function(username, password, cb) {
        db.User.findOne({ where: { username: username } }).then(function(user) {
            if (!user) {
                return cb(null, false, { message: "Invalid Username." });
            }
            console.log(user);
            user.checkPassword(password, function(err, res) {
                if (err || !res) {
                    return cb(null, false, { message: "Invalid Password." });
                } else {
                    return cb(null, user.toJSON());
                }
            });
        });
    }));

//Persistence Configuration
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.User.findOne({ where: { id: id } }).then(function(user) {
        cb(null, user);
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./app/public"));
app.use(methodOverride("_method"));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require("./app/routes/api-routes.js")(app, passport);
require('./app/routes/html-routes.js')(app, passport);
require('./app/routes/login-routes.js')(app, passport);

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.get('/admin', function(req, res) {
    res.sendFile(__dirname + '/app/public/admin.html')
})

//EJS for testing logins, uncomment above for using handlebars

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("Baking good on: " + PORT);
    });
});
