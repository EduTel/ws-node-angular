export module index_server_router {
    export function index_router_module(app: any): any {
        var index = require('../controller/index.server.controller');
        //**********************************GET**********************************
        console.error(index);
        app.get('/', index.estados);
        //**********************************POST**********************************
        app.post('/busqueda', index.busqueda);
    };
}