const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: [true, 'El producto es obligatorio']
  },
  cantidadVendida: {
    type: Number,
    required: [true, 'La cantidad vendida es obligatoria'],
    min: [1, 'Debe venderse al menos 1 unidad']
  },
  total: {
    type: Number,
    required: true
  },
  fechaVenta: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Venta', ventaSchema);