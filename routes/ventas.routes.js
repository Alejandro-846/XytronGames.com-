const express = require('express');
const { ventaValidators } = require('../middlewares/validators');
const { crearVenta, obtenerVentas } = require('../controllers/ventas.controller');

const router = express.Router();

router.post('/', ventaValidators, crearVenta);
router.get('/', obtenerVentas);

module.exports = { ventaRouter: router };