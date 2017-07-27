module.exports = function(sequelize, DataTypes){
	var OrderProduct = sequelize.define("OrderProduct", {
		quantity: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		},
		OrderId: {
			type: DataTypes.INTEGER,
			allowNull:false,
			primaryKey:true
		},
		ProductId: {
			type: DataTypes.INTEGER,
			allowNull:false,
			primaryKey:true
		}
	});

	return OrderProduct;
}