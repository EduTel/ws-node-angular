module.exports = function (app) {
    var index = require('../controller/index.server.controller');
    //**********************************GET**********************************
    console.error(index);
    app.get('/', index.estados);
    //**********************************POST**********************************
    app.post('/', index.busqueda);
}