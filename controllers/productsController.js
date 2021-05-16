const path = require('path');

const productsController = {
    productDetail: function(req , res){
        /* let htmlPath = path.join(__dirname,'../views/productDetail.html');
        res.sendFile(htmlPath); */
        res.render('productDetail');
    },

    productCart: function(req , res){
        /* let htmlPath = path.join(__dirname,'../views/productCart.html' );
        res.sendFile(htmlPath); */
        res.render('productCart');
    },

    crearProduct: function(req , res){
        /* let htmlPath = path.join(__dirname,'../views/productCart.html' );
        res.sendFile(htmlPath); */
        res.render('crearProducto');
    }
};

module.exports = productsController;