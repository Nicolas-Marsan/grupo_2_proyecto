const path = require('path');
const { body } = require('express-validator');

const validateEditMiddlewares = [
    body('modelo')
    .notEmpty().withMessage('El campo modelo no puede estar vacío').bail()
    .isLength({ min: 6}).withMessage('El modelo debe tener como mínimo 6 caracteres'),

    body('precio')
    .notEmpty().withMessage('El campo precio no puede estar vacío').bail()
    .isLength({ min: 1}).withMessage('El modelo debe tener como mínimo un caracter').bail()
    .isNumeric().withMessage('El campo precio debe contener solo números'),
];

module.exports = validateEditMiddlewares;