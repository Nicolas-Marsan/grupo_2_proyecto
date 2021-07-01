const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    let alias = "Memoria";

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
        tableName: "memorias",
        timestamps: false
    }

    const Memoria = sequelize.define(alias, cols, config);

}