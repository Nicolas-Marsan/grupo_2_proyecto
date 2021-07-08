const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    let alias = "Procesador";

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
        tableName: "procesadores",
        timestamps: false
    }

    const Procesador = sequelize.define(alias, cols, config);

    Procesador.associate = function(models){
        Procesador.hasMany(models.Producto,{
            as: "productos",

            foreignKey: "procesador_id"
        })
    }
    return Procesador;

}