const path = require('path');
const fs = require ('fs');
const db = require('../database/models');

let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'})); //Leer el JSON y pasarlo a objeto literal

const homeController = {
    home: function(req , res){

        let productoNuevoRequest = db.Producto.findAll({where: {categoria_id: 1}});
        let productoUsadoRequest = db.Producto.findAll({where: {categoria_id: 2}});

        Promise.all([productoNuevoRequest, productoUsadoRequest])
        .then(function([nuevo, usado]){
            res.render('index', {nuevo,usado});
            
        })
    }
};

module.exports = homeController;