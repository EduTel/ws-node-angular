var express = require('express');//manejador de servidor
var app = express();

var pug = require('pug'); //motor de vista
app.set('views', 'view');
app.set('view engine', 'pug');
/*************************sass****************************/
var connect        = require('connect');
var sassMiddleware = require('node-sass-middleware');
var path           = require('path');
//var winston        = require('winston');
//winston.level = 'debug';
//var srcPath = 'sass/index.sass';
var destPath = 'sass/';
/*************************add Middleware**************************/
app.use(
    sassMiddleware({
        src            : "compile/sass/",
        dest           : "css",
        debug          : true,
        outputStyle    : 'compressed',
        indentedSyntax : true,
        //prefix: __dirname
        //response      : true
        //prefix: '/prefix' // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/
        //log: function (severity, key, value) {
        //    console.log(severity, 'Error sass:', key, value);
        //}
    })
);
app.use(express.static('static'));
/*********************************************************/
// GET method route
//app.get('/', function (req, res, next) {
//    res.redirect('/Estados');
//});
//app.get('/:algo', function (req, res, next) {
//app.get('/css/index.css', function (req, res, next) {
//    res.render('css/index.css');
//});
app.get('/', function (req, res, next) {
    var f = new Date();
    console.log('Request URL:', req.originalUrl);
    console.log('Request Type:', req.method);
    console.log('Time:', f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
    //res.render('index', {
    //    h1: 'Estados 2',
    //});
    var get_estados = [
        [1, 2, 3],
        [4, 5, 6],
        [7]
    ];
    p_view = {
        //titulo    : req.params.algo,
        titulo: 'Estados',
        estados_p : get_estados
    };
    // Compile the source code
    var index = pug.renderFile('view/index.pug', p_view);
    var view  = pug.renderFile('view/header.pug', {
        contenido: index
    });
    res.send(view);
});
// POST method route
app.post('/', function (req, res, next) {
    res.send(view);
});
app.listen(3000, function () {
    //console.log("url: "+__dirname);
    //console.log('Example app listening on port 3000!');
});