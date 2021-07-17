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
    Ordenes_detalles.belongsTo(models.Usuarios,{
        as: "usuario",

        foreignKey: "usuario_id"
    });
    Ordenes_detalles.belongsTo(models.Producto,{
        as: "producto",

        foreignKey: "producto_id"
    });
} 




/*Pelicula.associate = function(models){
    Pelicula.belongsTo(models.Generos, {

        as: "generos",
        foreignKey: "genre_id"
    })

    Pelicula.belongsToMany(models.Actores, {
        as: "actores",
        through: "actor_movie",
        foreignKey: "movie_id",
        otherKey: "actor_id",
        timestamps: false

    });

}*/


return Ordenes_detalles;
}