function registroMiddleware(req, res, next) {
	if (req.session.userLogged) {
		console.log('decime que es ' + req.session.userLogged);
		//return res.redirect('/users/profile');
	}
	next();
}

module.exports = registroMiddleware;