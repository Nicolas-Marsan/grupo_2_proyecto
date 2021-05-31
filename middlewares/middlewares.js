const fs = require('fs');
const path = require('path');

let productDetailMiddleware = (req, res, next) => {
    let idURL = req.params.id;
    let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'}));
    let productoSeleccionado = products.filter((products)=>{return products.id == idURL});
    productoSeleccionado.length < 1 ? next('Lo siento, no se encontró el producto.') : next();
};

module.exports = productDetailMiddleware;