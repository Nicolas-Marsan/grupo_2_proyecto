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
            res.render('productEdit', {producto, marcas, categorias, color, memoria, pantalla, procesador, ram, sistemaOperativo})}).catch((e)=>res.send(e))

        /*  .then(producto => { res.render('productEdit', {producto}) /* res.send(producto )  })  */
        
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

        if(req.body.cantidad == 0){req.body.cantidad = 1}
            if(productoSeleccionado.stock >= req.body.cantidad){
            db.Ordenes_detalles.create({
                producto_id: productoSeleccionado.id,
                usuario_id: req.session.userLogged.id,
                cantidad: req.body.cantidad,
                estado:'abierta'
                
            }).then(()=>res.redirect('/products'))
            }else {
                
                res.render('sinStock');
            }
            //carrito.push(productoSeleccionado);
          // res.redirect('/products');
        })

    

        
   },
   sacarCarrito:(req, res) =>{
        
    db.Ordenes_detalles.destroy({
        where: {id:req.params.id}
    }).then(()=>res.redirect('/verCarrito'))

     
},
   verCarrito:(req, res) =>{
    
    db.Ordenes_detalles.findAll({
        include:[{association: 'detalle'}],
        where: {
           usuario_id: {[db.Sequelize.Op.eq] : req.session.userLogged.id },
           estado: {[db.Sequelize.Op.eq] : 'abierta' }
        }
     })
     
     
     .then(function(productos){
        
        //return res.send(productos[0].detalle.modelo);
        res.render('productCart',{productos});
    })
    
    
},
comprar:(req, res) =>{

    
    db.Ordenes_detalles.findAll({
        include:[{association: 'detalle'}],
        where: {
           usuario_id: {[db.Sequelize.Op.eq] : req.session.userLogged.id },
           estado: {[db.Sequelize.Op.eq] : 'abierta' }
        }
     }).then(function(productos){
         
        for(let i =0;i<productos.length ; i++){

            db.Ordenes_detalles.update({
                estado:'cerrado'
            }, {
                where: {
                    usuario_id: {[db.Sequelize.Op.eq] : req.session.userLogged.id },
                    estado: {[db.Sequelize.Op.eq] : 'abierta' }
                }
            })
            //console.log(productos[i].detalle.stock)
            //console.log(productos[i].cantidad)
            db.Producto.update({
                stock:(productos[i].detalle.stock - productos[i].cantidad)
            }, {
                where: {
                    id: {[db.Sequelize.Op.eq] : productos[i].detalle.id }
                     
                }
            })


        }

        res.redirect('/products');
    })
  
    
}
};

module.exports = productsController;

