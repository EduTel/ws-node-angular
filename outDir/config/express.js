"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express'); //manejador de servidor
const app = express();
//**********************************Motor de vista**********************************
//PUG
var pug = require('pug');
app.set('views', './app/views/compile/pug');
app.set('view engine', 'pug');
//app.configure('development', function () {
//    app.locals.pretty = true;
//});
//app.use(express.methodOverride());
//**********************************add Middleware**********************************
//SASS
var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
//import * as connect from 'connect';
//import * as sassMiddleware from 'node-sass-middleware';
//import * as path from 'path';
app.use(sassMiddleware({
    src: "./app/views/compile/sass/",
    dest: "./public/static/css",
    debug: true,
    outputStyle: 'compressed',
    indentedSyntax: true,
    prefix: '/cdn/css/'
}));
const index_server_router_1 = require("../app/routes/index.server.router");
var express_module;
(function (express_module) {
    function __express() {
        var index = index_server_router_1.index_server_router.index_router_module(app);
        app.use('/cdn', express.static('./public/static'));
        return app;
    }
    express_module.__express = __express;
    ;
})(express_module = exports.express_module || (exports.express_module = {}));
//# sourceMappingURL=express.js.map