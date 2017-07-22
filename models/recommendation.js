module.exports = function(sequelize, DataTypes) {
	var Recommendation = sequelize.define("Recommendation", {
		approved: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},

		text: {
			type: DataTypes.TEXT,
			validate: {
				allowNull: false
			}
		}
	});

	Recommendation.associate = function(models) {

		//gives access to User via (recommendation).UserId or .getUser()
		Recommendation.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Recommendation;

};
