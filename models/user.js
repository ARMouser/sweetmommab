var bcrypt = require("bcrypt");
var saltRounds = 10;
var bcrypt = require("bcrypt");
var saltRounds = 10;

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			},
		},

		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
				is: /^[\w]+[@]{1}[\w]+[.]{1}[a-z]+$/i //match things that look like a valid email
			}
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 72]
			}
		}
	}, {
		hooks: {
			beforeCreate: function(user) {
				User.hashPassword(user.password, function(err, hash){
					if (err) throw err;
					user.setDataValue("password", hash);
					user.save();
				});
			}
		}

	});

	User.hashPassword = function(password, cb) {
		bcrypt.genSalt(saltRounds, function(err, salt){
			bcrypt.hash(password, salt, function(err, hash){
				if (err) cb(err);
				cb(null, hash);
			});
		});
	};
	
	User.prototype.checkPassword = function(pass, cb) {
		bcrypt.compare(pass, this.password, cb);
	};


	return User;
};
		