//module.exports = function (app) {
export function index_router_module(app: any): any {
    var index = require('../controller/index.server.controller');
    //**********************************GET**********************************
    console.error(index);
    app.get('/', index.estados);
    //**********************************POST**********************************
    app.post('/', index.busqueda);
};