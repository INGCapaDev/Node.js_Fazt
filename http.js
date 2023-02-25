const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Welcome to Server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("Welcome to about");
    return response.end();
  }

  response.write(`
    <h1>Page not found 404</h1>
    <p>Esta pagina no se encontro.</p>
    <a href='/'>Volver a la pagina principal</a>
    `);
  response.end();
});

server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");
