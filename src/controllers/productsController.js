const path = require('path');
const fs = require ('fs');
const db = require('../database/models');
const Producto = db.Producto;
const { Op } = require("sequelize");
let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'})); //Leer el JSON y pasarlo a objeto literal
let carrito = [];

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
        //let newModels = products.filter((product)=>{return product.category == 'newmodel'}); // productos nuevos
        //let favoriteProducts = products.filter((product)=>{return product.category == 'favorite'}); // productos favoritos
        /* res.render('products', {products}); */
        db.Producto.findAll()
        .then(products =>{
            res.render('products', {products})
        })
    },
    productDetail: function(req , res){
        /* let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'}));
        idURL = req.params.id;
        let productoSeleccionado = products.filter((product)=>{ return product.id == idURL});
        res.render('productDetail', {productoSeleccionado}); */
        db.Producto.findByPk(req.params.id)
        .then(productoSeleccionado =>{
            res.render('productDetail', {productoSeleccionado})
        })
    },

    productCart: function(req , res){
        /* let htmlPath = path.join(__dirname,'../views/productCart.html' );
        res.sendFile(htmlPath); */
        res.render('productCart');
    },

    crearProduct: function(req , res){
        let marcasRquest = db.Marca.findAll();
        let categoriasRquest = db.Categoria.findAll();
        let colorRquest = db.Color.findAll();
        let memoriaRquest = db.Memoria.findAll();
        let pantallaRquest = db.Pantalla.findAll();
        let procesadorRquest = db.Procesador.findAll();
        let ramRquest = db.Ram.findAll();
        let sisOpRquest = db.Sistema_Operativo.findAll();
        /* db.Memoria.findAll().then(memoria=>{res.send(memoria)}) */
        
        Promise.all([marcasRquest, categoriasRquest, colorRquest, memoriaRquest, pantallaRquest, procesadorRquest, ramRquest, sisOpRquest])
        .then(function([marcas, categorias, color, memoria, pantalla, procesador, ram, sistemaOperativo]){
            res.render('crearProducto', {marcas, categorias, color, memoria, pantalla, procesador, ram, sistemaOperativo})
            /* res.send([marcas, categorias]) */
        })
    },

    guardarProduct: function(req , res){
        let filename = req.file.filename;
        db.Producto.create({
            modelo: req.body.modelo,
            marca_id: req.body.marca,
            color_id: req.body.color,
            memoria_id: req.body.memoria,
            pantalla_id: req.body.pantalla,
            procesador_id: req.body.procesador,
            ram_id: req.body.ram,
            sistema_operativo_id: req.body.sistema_operativo,
            marca_id: req.body.marca,
            precio_unitario: req.body.precio,
            imagen: filename,
            categoria_id: req.body.categorias,
            stock:1
        }).then(()=>res.redirect('/products'))
    },
    edit: (req, res) =>{
       let productoRquest = db.Producto.findByPk(req.params.id, {
            include: [{all: true}]
        })
        let marcasRquest = db.Marca.findAll();
        let categoriasRquest = db.Categoria.findAll();
        let colorRquest = db.Color.findAll();
        let memoriaRquest = db.Memoria.findAll();
        let pantallaRquest = db.Pantalla.findAll();
        let procesadorRquest = db.Procesador.findAll();
        let ramRquest = db.Ram.findAll();
        let sisOpRquest = db.Sistema_Operativo.findAll();

        Promise.all([productoRquest, marcasRquest, categoriasRquest, colorRquest, memoriaRquest, pantallaRquest, procesadorRquest, ramRquest, sisOpRquest])
        .then(function([producto, marcas, categorias, color, memoria, pantalla, procesador, ram, sistemaOperativo]){
            res.render('productEdit', {producto, marcas, categorias, color, memoria, pantalla, procesador, ram, sistemaOperativo})})

        /* .then(producto => {/* res.render('productEdit', {producto}) res.send(producto)  }) */
        
    },
    update:(req, res) =>{
       
        db.Producto.update({
            modelo: req.body.modelo,
            marca_id: req.body.marca,
            color_id: req.body.color,
            memoria_id: req.body.memoria,
            pantalla_id: req.body.pantalla,
            procesador_id: req.body.procesador,
            ram_id: req.body.ram,
            sistema_operativo_id: req.body.sistema_operativo,
            marca_id: req.body.marca,
            precio_unitario: req.body.precio,
            categoria_id: req.body.categorias,
            stock:1
        }, {
            where: {
                id: req.params.id
            }
        }).then(()=>res.redirect('/products'))
    },
    destroy:(req, res) =>{
         db.Producto.destroy({
             where: {id:req.params.id}
         }).then(()=>res.redirect('/products'))
    },
    carrito:(req, res) =>{
        db.Producto.findByPk(req.params.id)
        .then(productoSeleccionado =>{
            
            carrito.push(productoSeleccionado);
            res.redirect('/products');
        })

        
   },
   sacarCarrito:(req, res) =>{
        
      carrito =  carrito.filter(uno => uno.id!= req.params.id);

     res.redirect('/verCarrito');
},
   verCarrito:(req, res) =>{
    
    res.render('productCart',{carrito});
    
}
};

module.exports = productsController;