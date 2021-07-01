const Sequelize = require('sequelize');

module.exports = (sequelize, dataTypes) => {
    let alias = "Color";

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
        tableName: "colores",
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config);

    /* Color.associate = function(models){
        Color.
    }  */
}