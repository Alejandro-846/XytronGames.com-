const Producto = require('../models/Producto');
const Venta = require('../models/Venta');

exports.crearVenta = async (req, res) => {
  try {
    const { productoId, cantidad } = req.body;
    
    // Verificar producto y stock
    const producto = await Producto.findById(productoId);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    
    if (producto.cantidad < cantidad) {
      return res.status(400).json({ error: 'Stock insuficiente' });
    }
    
    // Calcular total
    const total = producto.precio * cantidad;
    
    // Crear venta
    const venta = new Venta({
      producto: productoId,
      cantidadVendida: cantidad,
      total
    });
    
    await venta.save();
    
    // Actualizar stock
    producto.cantidad -= cantidad;
    await producto.save();
    
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find().populate('producto');
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ventas' });
  }
};