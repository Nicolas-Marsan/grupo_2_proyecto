const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    let alias = "Ram";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        valor: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "rams",
        timestamps: false
    }

    const Ram = sequelize.define(alias, cols, config);

    Ram.associate = function(models){
        Ram.hasMany(models.Producto,{
            as: "productos",

            foreignKey: "ram_id"
        })
    }
    return Ram;

}