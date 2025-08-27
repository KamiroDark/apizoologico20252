// Importar el módulo http de Node.js
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