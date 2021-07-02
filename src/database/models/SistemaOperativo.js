const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    let alias = "Sistema_Operativo";

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
        tableName: "sistemas_operativos",
        timestamps: false
    }

    const Sistema_Operativo = sequelize.define(alias, cols, config);

    return Sistema_Operativo;

}