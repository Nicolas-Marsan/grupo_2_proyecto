const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    let alias = "Marca";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "marcas",
        timestamps: false
    }

    const Marca = sequelize.define(alias, cols, config);

    Marca.associate = function(models){
        Marca.hasMany(models.Producto,{
            as: "productos",

            foreignKey: "marca_id"
        });
    }

    return Marca;

}