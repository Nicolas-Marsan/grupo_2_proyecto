const db = require('../database/models');

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