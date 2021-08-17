const path = require('path');
const fs = require ('fs');
const db = require('../database/models');
const Producto = db.Producto;
const { Op } = require("sequelize");
let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'),{encoding:'utf-8'})); //Leer el JSON y pasarlo a objeto literal
let carrito = [];
const { validationResult }= require('express-validator');
const e = require('express');

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
        db.Producto.findAll()
        .then(products =>{
            res.render('products', {products})
        })
    },
    productDetail: function(req , res){
        db.Producto.findByPk(req.params.id)
        .then(productoSeleccionado =>{
            res.render('productDetail', {productoSeleccionado})
        })
    },

    productCart: function(req , res){

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

        
        Promise.all([marcasRquest, categoriasRquest, colorRquest, memoriaRquest, pantallaRquest, procesadorRquest, ramRquest, sisOpRquest])
        .then(function([marcas, categorias, color, memoria, pantalla, procesador, ram, sistemaOperativo]){
            res.render('crearProducto', {marcas, categorias, color, memoria, pantalla, procesador, ram, sistemaOperativo})

        })

    },

    guardarProduct: async function(req , res){
        try {
            let marcasRquest = await db.Marca.findAll();
            let categoriasRquest = await db.Categoria.findAll();
            let colorRquest = await db.Color.findAll();
            let memoriaRquest = await db.Memoria.findAll();
            let pantallaRquest = await db.Pantalla.findAll();
            let procesadorRquest = await db.Procesador.findAll();
            let ramRquest = await db.Ram.findAll();
            let sisOpRquest = await db.Sistema_Operativo.findAll();
            /* db.Memoria.findAll().then(memoria=>{res.send(memoria)}) */

            const resultadoValidaciones = validationResult(req);

            if (resultadoValidaciones.errors.length > 0) {
                console.log(req.body);
                console.log(resultadoValidaciones.mapped());
                return res.render('crearProducto.ejs', {
                    marcas: marcasRquest, categorias: categoriasRquest, color: colorRquest, memoria: memoriaRquest, pantalla: pantallaRquest, procesador: procesadorRquest, ram: ramRquest, sistemaOperativo: sisOpRquest, errors: resultadoValidaciones.mapped(),
                    oldData: req.body}
                );
            } else {
                let filename = req.file.filename;
        
                await db.Producto.create({
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
                })
                return res.redirect('/products')
            };
        }catch(e) {
            console.log(e);
            return res.redirect('/');
        }   

        
        
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


        
    },
    update: async (req, res) =>{
        try {
            let productoRquest = await db.Producto.findByPk(req.params.id, {
                include: [{all: true}]
            })
            let marcasRquest = await db.Marca.findAll();
            let categoriasRquest = await db.Categoria.findAll();
            let colorRquest = await db.Color.findAll();
            let memoriaRquest = await db.Memoria.findAll();
            let pantallaRquest = await db.Pantalla.findAll();
            let procesadorRquest = await db.Procesador.findAll();
            let ramRquest = await db.Ram.findAll();
            let sisOpRquest = await db.Sistema_Operativo.findAll();


            const resultadoValidaciones = validationResult(req);
            console.log(req.file);
            if (resultadoValidaciones.errors.length > 0) {
                console.log(req.body);
                console.log(resultadoValidaciones.mapped());
                return res.render('productEdit.ejs', {
                    producto: productoRquest, marcas: marcasRquest, categorias: categoriasRquest, color: colorRquest, memoria: memoriaRquest, pantalla: pantallaRquest, procesador: procesadorRquest, ram: ramRquest, sistemaOperativo: sisOpRquest, errors: resultadoValidaciones.mapped(),
                    oldData: req.body}
                );
            } else {
                let filename = req.file.filename;
                
                await db.Producto.update({
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
                imagen: filename,
                stock:1
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                res.redirect('/products')
            }
        }catch(e){
            console.log(e)
            return res.redirect('/')
        };
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

