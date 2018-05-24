const http = require('http');

const hostname = '127.0.0.7';
const port = 3000;
var arreglo_parametros = [];

const server = http.createServer((req, res) => {
    if (req.url.indexOf("?" > 0)) {
        var url_data = req.url.split("?");
        var arreglo_parametros = url_data[1].split("&");
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola Mundo 2\n');
});

server.listen(port, hostname, () => {
    /*este mensaje es para el servidor*/
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});