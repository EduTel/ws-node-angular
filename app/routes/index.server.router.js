module.exports = function (app) {
    var index = require('../controller/index.server.controller');
    //**********************************GET**********************************
    app.get('/', index.estados);
    //**********************************POST**********************************
    app.post('/', index.municipios);
}