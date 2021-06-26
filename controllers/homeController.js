const path = require('path');
const fs = require ('fs');

let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'})); //Leer el JSON y pasarlo a objeto literal

const homeController = {
    home: function(req , res){
        let newModels = products.filter((product)=>{return product.category == 'newmodel'}); // productos nuevos
        let favoriteProducts = products.filter((product)=>{return product.category == 'favorite'}); // productos favoritos
        res.render('index', {favoriteProducts,newModels});
    }
};

module.exports = homeController;