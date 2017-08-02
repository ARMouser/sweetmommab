module.exports = function (sequelize, DataTypes) {
	var Product = sequelize.define("Product", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT
		},
		price: {
			type: DataTypes.TEXT
		},
		photo: {
			type: DataTypes.STRING
		},
		custom: {
			type: DataTypes.TEXT
		}
	});

	Product.associate = function(models) {
		Product.belongsToMany(models.Order, {
			through: "OrderProduct"
		});
	}

	return Product;
}