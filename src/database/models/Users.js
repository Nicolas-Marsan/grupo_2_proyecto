const Sequelize = require('sequelize');


module.exports = (sequelize,dataTypes) => {

let alias = "Usuarios";
let cols = {
    id: {
        type: dataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre: {
        type: dataTypes.STRING
    },
    apellido:{

        type: dataTypes.STRING
    },
    mail: {
        type:dataTypes.STRING
    },
    contrasenia: {
        type: dataTypes.STRING
    },
    tyc: {
        type: dataTypes.TINYINT
    },
    newletter: {
        type: dataTypes.TINYINT
    },
    imagen: {
        type: dataTypes.STRING
    }
};

let config = {
    tableName: "usuarios",
    timestamps: false

}
const Usuarios = sequelize.define(alias,cols,config);



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


return Usuarios;
}