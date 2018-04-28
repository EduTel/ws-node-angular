var express = require('express');//manejador de servidor
var app = express();

var pug = require('pug'); //motor de vista
app.set('views', 'view');
app.set('view engine', 'pug');

var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');

var get_estados = [[1, 2, 3],[4, 5, 6], [7]];

p_view = {
        h1        : 'Estados 1',
        estados_p : get_estados
};
// Compile the source code
const view = pug.renderFile('view/index.pug', p_view);
// GET method route
app.get('/', function (req, res) {
    //res.render('index', {
    //    h1: 'Estados 2',
    //});
    res.send(view);
});
// POST method route
//app.post('/', function (req, res) {
//    res.send(view);
//});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});