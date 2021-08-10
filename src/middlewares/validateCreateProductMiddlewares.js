const path = require('path');
const { body } = require('express-validator');


/* Validaciones */
const validateCreateProductMiddlewares = [
    body('modelo')
    .notEmpty().withMessage('El campo modelo no puede estar vacío').bail()
    .isLength({ min: 6}).withMessage('El modelo debe tener como mínimo 6 caracteres'),

    body('precio')
    .notEmpty().withMessage('El campo precio no puede estar vacío').bail()
    .isLength({ min: 1}).withMessage('El modelo debe tener como mínimo un caracter').bail()
    .isNumeric().withMessage('El campo precio debe contener solo números'),

    body('imagen').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen')
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }

        return true;
    }),
];

module.exports = validateCreateProductMiddlewares;