require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { mongoose } = require('./config/db');
const { productoRouter } = require('./routes/productos.routes');
const { ventaRouter } = require('./routes/ventas.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/productos', productoRouter);
app.use('/api/ventas', ventaRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});