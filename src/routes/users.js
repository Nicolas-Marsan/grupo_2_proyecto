const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require ('../controllers/usersController.js');
const multer = require('multer');

let storage = multer.diskStorage({    
	destination: (req,file,callback) => {
    let folder = path.join(__dirname, '../public/images/users');
    console.log(folder)
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


/* probando conexion con db */
router.get('/all', usersController.all);


/* Formulario de registro */
router.get('/register',registroMiddleware, usersController.register);

/* Procesar el registro */
router.post('/register', fileUpload.single('image'), usersController.updateR);

/* Formulario de login */
router.get('/login',registroMiddleware, usersController.login);

/* Procesar el login */
router.post('/login', usersController.processLogin);

/* Perfil del usuario */
router.get('/profile',sinUsuarioMiddleware, usersController.profile);

/* Logout */
router.get('/logout', usersController.logout);

module.exports = router;