module.exports = (sequelize, dataTypes) => {
    const alias = 'Producto';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        modelo: {
            type: dataTypes.STRING
        },
        marca_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        sistema_operativo_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        ram_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        memoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        pantalla_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        procesador_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        color_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        precio_unitario: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    const config = {
        tableName: 'productos',
        timestamps: false,
        underscored: true,
    };
    
    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Marca,{
            as: "marcas",

            foreignKey: "marca_id"
        });
        Producto.belongsTo(models.Categoria,{
            as: "categorias",

            foreignKey: "categoria_id"
        });
         Producto.belongsTo(models.Color,{
            as: "colores",

            foreignKey: "color_id"
        });
        Producto.belongsTo(models.Memoria,{
            as: "memorias",

            foreignKey: "memoria_id"
        });
        Producto.belongsTo(models.Pantalla,{
            as: "pantallas",

            foreignKey: "pantalla_id"
        });
        Producto.belongsTo(models.Procesador,{
            as: "procesadores",

            foreignKey: "procesador_id"
        });
        Producto.belongsTo(models.Ram,{
            as: "rams",

            foreignKey: "ram_id"
        });
        Producto.belongsTo(models.Sistema_Operativo,{
            as: "sistemas_operativos",

            foreignKey: "sistema_operativo_id"
        });

        
            Producto.hasMany(models.Ordenes_detalles,{
                as: "producto",
                foreignKey: "producto_id"
            })
    } 

    
    


    return Producto
}