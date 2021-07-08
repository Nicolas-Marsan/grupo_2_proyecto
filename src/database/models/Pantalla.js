const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    let alias = "Pantalla";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        tamaño: {
            type: dataTypes.STRING
        },

        resolucion: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "pantallas",
        timestamps: false
    }

    const Pantalla = sequelize.define(alias, cols, config);

    Pantalla.associate = function(models){
        Pantalla.hasMany(models.Producto,{
            as: "productos",

            foreignKey: "pantalla_id"
        })
    }
    return Pantalla;

}