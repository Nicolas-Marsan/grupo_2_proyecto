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

    return Marca;

}