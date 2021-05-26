const path = require('path');
const fs = require ('fs');

let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'})); //Leer el JSON y pasarlo a objeto literal

const productsController = {
    index: function(req, res){
        let newModels = products.filter((product)=>{return product.newmodel}); // productos nuevos
        let favoriteProducts = products.filter((product)=>{return product.favorite}); // productos favoritos
        res.render('products', {favoriteProducts,newModels});
    },
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