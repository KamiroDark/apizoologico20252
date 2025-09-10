/*Importar el módulo http de Node.js
const http = require("http");

// Definir el puerto donde se ejecutará el servidor
const PORT = 3000;

// Crear el servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Código 200 = OK
  res.setHeader("Content-Type", "text/plain");
  res.end("¡Hola! Tu servidor Node.js está funcionando 🚀");
});

// Hacer que el servidor escuche en el puerto definido
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
*/

const express = require('express'); //Es como un Import en Java
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola! Tu servidor Express está funcionando 🚀');
});

app.listen(port, () => {
  console.log('La aplicación se esa ejecuntando en el puerto ' + port);
});