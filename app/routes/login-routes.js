var db = require("../../models");

module.exports = function(app, passport) {

	app.get("/login", function(req, res){
		if (!req.user) {
			res.render("login", {message: req.flash()});
		}
		else {
			res.redirect("back");
		}
	});


	app.get("/create", function(req, res){
		res.render("create", {message:req.flash()});
	});


	app.get("/logout", function(req, res){
		req.logout();
		res.redirect("/");
	});

	//Account creation
	app.post("/account/create", function(req, res){
		db.User.create({
			name: req.body.name,
			username: req.body.username,
			password: req.body.password,
			email: req.body.email
		}).then(function(user){
			if (!user) console.log("some problem here");
			else {
				res.redirect("/login");
			}
		}).catch(function(err){
			req.flash("error", "Username Taken.");
			res.redirect("/create");
		});
	});

	app.post("/account/login",
		passport.authenticate("local", {
			failureRedirect: "/login",
			failureFlash: true
		}), function(req, res) {
			res.redirect("back");
	});
}