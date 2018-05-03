var express = require('express');//manejador de servidor
var app = express();

var pug = require('pug'); //motor de vista
app.set('views', 'view');
app.set('view engine', 'pug');

var connect        = require('connect');
var sassMiddleware = require('node-sass-middleware');
var srcPath = '_sass/index.sass';
var destPath = '_styles/';
//app.use('styles/', sassMiddleware);
app.use(
    sassMiddleware({
        src         : srcPath,
        dest        : destPath,
        debug       : true,
        outputStyle : 'expanded'
    })
);
var get_estados = [[1, 2, 3],[4, 5, 6], [7]];

// GET method route
app.get('/', function (req, res) {
    res.redirect('/estados');
});
app.get('/:algo', function (req, res) {
    //res.render('index', {
    //    h1: 'Estados 2',
    //});
    p_view = {
        titulo: req.params.algo,
        estados_p: get_estados
    };
    // Compile the source code
    var index = pug.renderFile('view/index.pug', p_view);
    var view = pug.renderFile('view/header.pug', {
        contenido: index
    });
    res.send(view);
});
// POST method route
app.post('/', function (req, res) {
    res.send(view);
});
app.listen(3000, function () {
    console.log("url: "+__dirname);
    console.log('Example app listening on port 3000!');
});