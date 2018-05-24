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
var connect        = require('connect');
var sassMiddleware = require('node-sass-middleware');
var path           = require('path');

//import * as connect from 'connect';
//import * as sassMiddleware from 'node-sass-middleware';
//import * as path from 'path';
app.use(
    sassMiddleware({
        src           : "./app/views/compile/sass/",
        dest          : "./public/static/css",
        debug         : true,
        outputStyle   : 'compressed',
        indentedSyntax: true,
        prefix        : '/cdn/css/'
    })
);
export module express_module {
    export function __express(): any{
        var index = require('../app/routes/index.server.router')(app);
        //import { index_router_module } from '../app/routes/index.server.router';
        app.use('/cdn', express.static('./public/static'));
        return app;
    };
}