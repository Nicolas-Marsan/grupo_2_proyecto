const path = require('path');
const fs = require ('fs');

let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'})); //Leer el JSON y pasarlo a objeto literal


const lastId = () =>{
	let ultimo = 0;
		products.forEach(note => {
		  if (ultimo < note.id){
		ultimo = note.id;
		}
		});
	return ultimo;
	}

const productsController = {
    index: function(req, res){
        let newModels = products.filter((product)=>{return product.category == 'newmodel'}); // productos nuevos
        let favoriteProducts = products.filter((product)=>{return product.category == 'favorite'}); // productos favoritos
        res.render('products', {favoriteProducts,newModels});
    },
    productDetail: function(req , res){
        idURL = req.params.id;
        let productoSeleccionado = products.filter((product)=>{ return product.id == idURL});
        res.render('productDetail', {productoSeleccionado});
    },

    productCart: function(req , res){
        /* let htmlPath = path.join(__dirname,'../views/productCart.html' );
        res.sendFile(htmlPath); */
        res.render('productCart');
    },

    crearProduct: function(req , res){

    
        res.render('crearProducto');
    },

    guardarProduct: function(req , res){
        

        let datos = {
			id:lastId() + 1,
			name: req.body.nombre,
			price: req.body.precio,
            Tdetail:req.body.tDetalle,
			detail:req.body.detalle,
			category:req.body.select,
			image:req.file.filename
		}
        
        
        products.push(datos);

		let nuevo = JSON.stringify(products, null,4);

		fs.writeFileSync(path.join(__dirname, '../data/products.json'),nuevo);

		
        res.redirect('products');
    }
};

module.exports = productsController;