const path = require('path');
const { body } = require('express-validator');


/* Validaciones */
const validations = [
    body('name')
    .notEmpty().withMessage('El campo nombre no puede estar vacío').bail()
    .isLength({ min: 2}).withMessage('El nombre debe tener como mínimo 2 caracteres'),

    body('last_name')
    .notEmpty().withMessage('El campo apellido no puede estar vacío').bail()
    .isLength({ min: 2}).withMessage('El apellido debe tener como mínimo 2 caracteres'),

    body('email')
    .notEmpty().withMessage('El campo email no puede estar vacío').bail() /* bail() detiene las validaciones si salta este error */
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    
    body('contrasenia')
    .notEmpty().withMessage('El campo contraseña no puede estar vacío').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener como mínimo 8 caracteres'),
    /* .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage('La contraseña debe contener al menos una mayuscula, una minuscula, un número y un caracter especial'), */
    

    // body('image').custom((value, { req }) => {
    //     let file = req.file;
    //     let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
        

    //     if (!file) {
    //     } else {
    //         let fileExtension = path.extname(file.originalname);
    //         if (!acceptedExtensions.includes(fileExtension)) {
    //             throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
    //         }
    //     }

    //     return true;
    // }),

    

];

module.exports = validations;