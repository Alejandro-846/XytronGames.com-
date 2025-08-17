const { body, param } = require('express-validator');

const productoValidators = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio').trim(),
  body('tipo').isIn(['juego', 'consola']).withMessage('El tipo debe ser "juego" o "consola"'),
  body('precio').isFloat({ gt: 0 }).withMessage('El precio debe ser mayor a 0'),
  body('cantidad').isInt({ min: 0 }).withMessage('La cantidad no puede ser negativa')
];

const ventaValidators = [
  body('productoId').notEmpty().withMessage('El ID del producto es obligatorio').isMongoId().withMessage('ID no válido'),
  body('cantidad').isInt({ min: 1 }).withMessage('La cantidad debe ser al menos 1')
];

const idValidator = [
  param('id').isMongoId().withMessage('ID no válido')
];

module.exports = {
  productoValidators,
  ventaValidators,
  idValidator
};