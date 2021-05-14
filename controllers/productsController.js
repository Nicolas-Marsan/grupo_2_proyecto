const path = require('path');

const productsController = {
    productDetail: function(req , res){
        let htmlPath = path.join(__dirname,'../views/productDetail.html');
        res.sendFile(htmlPath);
    },

    productCart: function(req , res){
        let htmlPath = path.join(__dirname,'../views/productCart.html' );
        res.sendFile(htmlPath);
    }
};

module.exports = productsController;