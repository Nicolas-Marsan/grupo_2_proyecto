const db = require ('../database/models');

async function usuarioLogueadoMiddleware(req, res, next) {
	res.locals.isLogged = false;

	if (req.cookies.userEmail){
		let usuarioEnCookie = await db.Usuarios.findAll({
			where: {mail: req.cookies.userEmail}
		})
		req.session.userLogged = {
			id: usuarioEnCookie[0].dataValues.id,
			nombre: usuarioEnCookie[0].dataValues.nombre,
			apellido: usuarioEnCookie[0].dataValues.apellido,
			mail: usuarioEnCookie[0].dataValues.mail,
			imagen: usuarioEnCookie[0].dataValues.imagen,
		}
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged

	} else if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	} 	

	next();
}

module.exports = usuarioLogueadoMiddleware;