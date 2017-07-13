var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require('./models')
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 4020;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));
app.use(methodOverride("_method"));

require("./routes/api-routes.js");
require('./routes/html-routes.js')(app);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Baking good on: " + PORT);
    });
});
