<img width="1024" height="1024" alt="ChatGPT Image 16 ago 2025, 09_20_34 p m" src="https://github.com/user-attachments/assets/38dc2659-5941-43b9-9258-41feb7495589" />

<img width="1904" height="979" alt="image" src="https://github.com/user-attachments/assets/6d8f643a-99da-4e70-90d5-f5ee16da1ee8" />

## 🎥 Video Demostración

Para ver el funcionamiento completo del sistema en acción, puedes ver nuestro video demostrativo:

[![Video Demostración XYTRON Games](https://img.youtube.com/vi/YC_caldLvuY/0.jpg)](https://youtu.be/YC_caldLvuY)

**Contenido del video**:
- Demostración completa del backend con Node.js y Express
- Configuración de rutas y middlewares
- Solución de CORS entre frontend y backend
- Pruebas de endpoints con Postman

# 🎮 XYTRON Games - Backend API

API RESTful para el sistema de gestión de inventario y ventas de XYTRON Games, una tienda especializada en videojuegos y consolas.

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Express Validator** - Validación de datos
- **CORS** - Habilitación de跨域请求
- **Dotenv** - Manejo de variables de entorno

## 📦 Estructura del Proyecto
<img width="748" height="463" alt="image" src="https://github.com/user-attachments/assets/cabbb370-46d1-4166-95a1-4b83b33316c3" />
<img width="469" height="620" alt="image" src="https://github.com/user-attachments/assets/703a3d05-4c48-41e1-8623-35afc45a33dd" />



## ⚙️ Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- MongoDB (local o Atlas)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd xytron-games-backend
Instalar dependencias
```
```bash
npm install
Configurar variables de entorno
```
```bash
# Crear archivo .env
cp .env.example .env
Configurar variables en .env

env
```
```
MONGO_URI=mongodb://localhost:27017/xytron_games
PORT=4000
NODE_ENV=development
Iniciar MongoDB (si es local)


# En sistemas con MongoDB instalado
mongod
```
Ejecutar la aplicación

```bash
# Desarrollo
npm run dev
```
# Producción
npm start
📡 Endpoints de la API
Productos
```
Método	Endpoint	Descripción
GET	/api/productos	Obtener todos los productos
GET	/api/productos/:id	Obtener producto por ID
POST	/api/productos	Crear nuevo producto
PUT	/api/productos/:id	Actualizar producto
DELETE	/api/productos/:id	Eliminar producto
Ventas
Método	Endpoint	Descripción
GET	/api/ventas	Obtener historial de ventas
POST	/api/ventas	Registrar nueva venta
```
🔧 Ejemplos de Uso
```
Crear un producto
bash
curl -X POST http://localhost:4000/api/productos \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "PlayStation 5",
    "tipo": "consola",
    "precio": 499.99,
    "cantidad": 15
  }'
Registrar una venta
bash
curl -X POST http://localhost:4000/api/ventas \
  -H "Content-Type: application/json" \
  -d '{
    "productoId": "507f1f77bcf86cd799439011",
    "cantidad": 2
  }'
Obtener todos los productos

curl -X GET http://localhost:4000/api/productos
```
🛡️ Validaciones
Productos
nombre: Requerido, máximo 100 caracteres

tipo: Requerido, debe ser "juego" o "consola"

precio: Requerido, mínimo 0

cantidad: Requerido, mínimo 0

Ventas
productoId: Requerido, ID válido de MongoDB

cantidad: Requerido, mínimo 1

Validación automática de stock disponible

🚨 Manejo de Errores
La API retorna códigos HTTP apropiados:

200 - OK

201 - Creado

400 - Solicitud incorrecta

404 - Recurso no encontrado

500 - Error interno del servidor

Ejemplo de respuesta de error:

json
{
  "error": "Stock insuficiente"
}
🔒 CORS Configuration
La API está configurada para aceptar requests desde:

http://localhost:3000 (Frontend development)

Dominios de producción (configurable)

🧪 Testing
Pruebas con Postman
Importar la colección de Postman incluida

Configurar environment variables

Ejecutar endpoints

Pruebas con curl
Ver sección "Ejemplos de Uso"

📊 Base de Datos
Esquema de Producto
javascript
{
  nombre: String,
  tipo: String, // "juego" o "consola"
  precio: Number,
  cantidad: Number,
  createdAt: Date,
  updatedAt: Date
}
Esquema de Venta
javascript
{
  producto: ObjectId, // Referencia a Producto
  cantidadVendida: Number,
  total: Number,
  fechaVenta: Date
}
🚀 Despliegue
Despliegue en Heroku
```bash
# Configurar variables en Heroku Dashboard
heroku config:set MONGO_URI=<tu-mongo-uri>
heroku config:set NODE_ENV=production
```

# Desplegar

```
git push heroku main
Despliegue en Vercel
```
# Configurar vercel.json
```
npm i -g vercel
vercel --prod
```
🔗 Enlaces Relacionados
```
Frontend Repository  https://github.com/Alejandro-846/xytron_games-frontend
