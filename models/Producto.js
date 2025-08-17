const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres']
  },
  tipo: {
    type: String,
    required: [true, 'El tipo es obligatorio'],
    enum: {
      values: ['juego', 'consola'],
      message: 'El tipo debe ser "juego" o "consola"'
    }
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  },
  cantidad: {
    type: Number,
    required: [true, 'La cantidad es obligatoria'],
    min: [0, 'La cantidad no puede ser negativa'],
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Producto', productoSchema);