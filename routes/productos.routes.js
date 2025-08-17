const express = require('express');
const { productoValidators, idValidator } = require('../middlewares/validators');
const { 
  crearProducto, 
  obtenerProductos, 
  obtenerProducto, 
  actualizarProducto, 
  eliminarProducto 
} = require('../controllers/productos.controller');

const router = express.Router();

router.post('/', productoValidators, crearProducto);
router.get('/', obtenerProductos);
router.get('/:id', idValidator, obtenerProducto);
router.put('/:id', [...idValidator, ...productoValidators], actualizarProducto);
router.delete('/:id', idValidator, eliminarProducto);

module.exports = { productoRouter: router };