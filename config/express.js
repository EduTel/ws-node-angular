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
module.exports = function () {
    var index = require('../app/routes/index.server.router')(app);
    app.use('/cdn', express.static('./public/static'));
    return app;
}