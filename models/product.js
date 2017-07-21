module.exports = function (sequelize, DataTypes) {
	var Product = sequelize.define("Product", {
		name: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.TEXT
		},
		price: {
			type: DataTypes.DECIMAL
		},
		custom: {
			type: DataTypes.TEXT
		}
	});

	Product.associate = function(models) {
		Product.belongsToMany(models.Order, {
			through: "OrderProducts"
		});
	}
}