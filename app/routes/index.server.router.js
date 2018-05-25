"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_server_router;
(function (index_server_router) {
    function index_router_module(app) {
        var index = require('../controller/index.server.controller');
        //**********************************GET**********************************
        console.error(index);
        app.get('/', index.estados);
        //**********************************POST**********************************
        app.post('/', index.busqueda);
    }
    index_server_router.index_router_module = index_router_module;
    ;
})(index_server_router = exports.index_server_router || (exports.index_server_router = {}));
//# sourceMappingURL=index.server.router.js.map