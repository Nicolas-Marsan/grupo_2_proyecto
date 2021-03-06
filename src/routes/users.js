const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require ('../controllers/usersController.js');
const multer = require('multer');
const { body } = require('express-validator');
const validateLoginMiddlewares = require ('../middlewares/validateLoginMiddleware');

let storage = multer.diskStorage({    
	destination: (req,file,callback) => {
    let folder = path.join(__dirname, '../../public/images/users');
 callback(null, folder);
},
filename: (req,file,callback) =>{
    let imageName = file.fieldname +  Date.now() + path.extname(file.originalname);
callback(null, imageName);
}
});

const registroMiddleware = require('../middlewares/registroMiddleware');
const sinUsuarioMiddleware = require('../middlewares/sinUsuarioMiddleware');

const fileUpload = multer({ storage });

const validations = require('../middlewares/validateRegisterMiddleware');

/* probando conexion con db */
router.get('/all', usersController.all);



/* Formulario de registro */
router.get('/register',registroMiddleware, usersController.register);

/* Procesar el registro */
router.post('/register', fileUpload.single('image'), validations, usersController.updateR);

/* Formulario de login */
router.get('/login',registroMiddleware, usersController.login);

/* Formulario de editar perfil */
router.get('/editarUsuario', usersController.editarUsuario);



/* Procesar el login */
router.post('/login', validateLoginMiddlewares, usersController.processLogin);

/* Perfil del usuario */
router.get('/profile',sinUsuarioMiddleware, usersController.profile);

/* Logout */
router.get('/logout', usersController.logout);

/* actualiza datos */
router.post('/actualiza/:id',fileUpload.single('image'), usersController.actualiza);

module.exports = router;