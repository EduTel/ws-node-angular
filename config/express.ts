const express = require('express'); //manejador de servidor
const app = express();
//**********************************Motor de vista**********************************
//PUG
var pug = require('pug');
app.set('views', './app/views/compile/pug');
app.set('view engine', 'pug');
//**********************************add Middleware**********************************
//SASS
var connect        = require('connect');
var sassMiddleware = require('node-sass-middleware');
var path           = require('path');

app.use(
    sassMiddleware({
        src           : "./app/views/compile/sass/",
        dest          : "./public/static/css",
        indentedSyntax: true,
        prefix        : '/cdn/css/',
        debug         : false,
        //sourceMap: "./public/static/css",
        sourceMap     : true,
        //sourceComments: 'normal',
        //outputStyle   : 'compressed',
        outputStyle: 'compressed',
        //outputStyle: 'nested',

        //debug: !PROD,
        //outputStyle: 'nested',
        //force: !PROD
    })
);
var bodyParser = require('body-parser'); 
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

import { index_server_router } from '../app/routes/index.server.router';
export module express_module {
    export function __express(): any{
        var index = index_server_router.index_router_module(app);
        app.use('/cdn', express.static('./public/static'));
        app.use('/app/views/compile/sass', express.static('./app/views/compile/sass'));
        return app;
    };
}