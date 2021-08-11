const Sequelize = require('sequelize');


module.exports = (sequelize,dataTypes) => {

let alias = "Ordenes_detalles";
let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    producto_id: {
        type: dataTypes.INTEGER
    },
    usuario_id:{

        type: dataTypes.INTEGER
    },
    cantidad: {
        type:dataTypes.INTEGER
    },
    estado: {
        type: dataTypes.STRING
    }
};

let config = {
    tableName: "ordenes_detalles",
    timestamps: false

}
const Ordenes_detalles = sequelize.define(alias,cols,config);

Ordenes_detalles.associate = function(models){
    
    Ordenes_detalles.belongsTo(models.Producto,{
        as: "detalle",

        foreignKey: "producto_id"
    });
} 






return Ordenes_detalles;
}