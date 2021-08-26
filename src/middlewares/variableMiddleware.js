const db = require("../database/models");

function variableMiddleware(req, res, next) {
    
    if (req.session.userLogged) {
		
	
	db.Ordenes_detalles.findAll({
        include:[{association: 'detalle'}],
        where: {
           usuario_id: {[db.Sequelize.Op.eq] : req.session.userLogged.id},
           estado: {[db.Sequelize.Op.eq] : 'abierta' }
        }
     })
     
     
     .then(function(productos){
        
        res.locals.cantrito = productos.length;
        
    })
}
	next();
}

module.exports = variableMiddleware;

