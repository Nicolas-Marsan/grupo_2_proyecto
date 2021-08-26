const path = require('path');
const { body } = require('express-validator');

const validateLoginMiddlewares = [
    body('email')
    .notEmpty().withMessage('El email no puede estar vacío').bail()
    .isLength({ min: 6}).withMessage('El email debe tener como mínimo 6 caracteres'),

    body('contrasenia')
    .notEmpty().withMessage('La contraseña no puede estar vacío').bail()
    .isLength({ min: 1}).withMessage('La contraseña debe tener como mínimo 8 caracteres').bail()
];

module.exports = validateLoginMiddlewares;