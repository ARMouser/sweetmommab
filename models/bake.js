module.exports = function(sequelize, DataTypes) {
    var Bakery = sequelize.define("Bakery", {
        item: {
            type: DataTypes.STRING
        },
    }); return Bakery
}