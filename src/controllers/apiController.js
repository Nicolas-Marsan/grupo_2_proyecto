const db = require('../database/models');
const { Op } = require("sequelize");

const apiController = {
    list: async(req , res) => {
        try{
            let productos = await db.Producto.findAll();
            let categorias = await db.Categoria.findAll();      
            return res.status(200).json({
                status: 200,
                count: productos.length,
                countByCategory: {
                    nuevo: productos.filter(producto => producto.categoria_id == 1).length,
                    usado: productos.filter(producto => producto.categoria_id == 2).length,
                    favorito: productos.filter(producto => producto.categoria_id == 3).length,
                },
                data: productos.map(producto => {
                    return{
                        id: producto.id,
                        modelo: producto.modelo,
                        precio: producto.precio_unitario,
                        categoria: categorias.filter(categoria => categoria.id === producto.id)[0],
                        detalle_url: `http://localhost:3000/products/detail/${producto.id}`,
                    };
                }),
            });
        }catch (err){
            console.log(err);
        };
    },
    product: async (req, res) => {
        try{
            let producto = await db.Producto.findByPk(req.params.id);
            let categorias = await db.Categoria.findAll();
            let marcas = await db.Marca.findAll();
            let colores = await db.Color.findAll();
            let memorias = await db.Memoria.findAll();
            let pantallas = await db.Pantalla.findAll();
            let procesadores = await db.Procesador.findAll();
            let rams = await db.Ram.findAll();
            let sistemasOperativos = await db.Sistema_Operativo.findAll();
            
            if (!producto){
                return res.send("El producto que está buscando no existe.")
            }

            return res.status(200).json({
                status: 200,
                data:  { 
                        id: producto.id,
                        modelo: producto.modelo,
                        precio: producto.precio_unitario,
                        categoria: categorias.filter(categoria => categoria.id === producto.id)[0],
                        marca: marcas.filter(marca => marca.id === producto.id)[0],
                        sistema_operativo: sistemasOperativos.filter(sistemaOperativo => sistemaOperativo.id === producto.id)[0],
                        ram: rams.filter(ram => ram.id === producto.id)[0],
                        memoria: memorias.filter(memoria => memoria.id === producto.id)[0],
                        pantalla: pantallas.filter(pantalla => pantalla.id === producto.id)[0],
                        procesador: procesadores.filter(procesador => procesador.id === producto.id)[0],
                        color: colores.filter(color => color.id === producto.id)[0],
                        imagen: producto.imagen,
                        imagen_url: `http://localhost:3000/public/images/products/${producto.imagen}`,
                    },
            });
        }catch (err){
            console.log(err);
        };
    },
    users: (req,res) =>{
        db.Usuarios.findAll()
         .then(function(usuarios){
             let nUsuarios=[];

            for (let i=0;i<usuarios.length;i++){
               nUsuarios.push( {   
                    Id:usuarios[i].id,
                    Nombre:usuarios[i].nombre,
                    Mail:usuarios[i].mail,
                    Perfil:"http://localhost:3000/users/profile"
                })
            }            
           return res.status(200).json({
                
                count: usuarios.length,
                users: nUsuarios

           });
         })

    },

    userId: (req,res) =>{
        db.Usuarios.findAll( {
            where:{
                id: {[Op.eq]:  req.params.id }  
                }           
            })
         .then(function(usuarios){
             console.log(usuarios);
             let nUsuarios=[];

                    nUsuarios.push( {   
                    Id:usuarios[0].id,
                    Nombre:usuarios[0].nombre,
                    Apellido:usuarios[0].apellido,
                    Mail:usuarios[0].mail,
                    Tyc:usuarios[0].tyc,
                    Newletter:usuarios[0].newletter,
                    Imagen:"/images/users/"+usuarios[0].imagen
                })
                       
           return res.status(200).json({
                
                
                usuario: nUsuarios

           });
         })

    }


};

module.exports = apiController;