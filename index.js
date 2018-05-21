var express = require('express');//manejador de servidor
var app = express();
//Motor de vista
var pug = require('pug'); 
app.set('views', 'view');
app.set('view engine', 'pug');
//WS
var soap = require('soap');
//XML
var xml2js = require('xml2js');
//var parser = new xml2js.Parser();
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
        src           : "compile/sass/",
        dest          : "static/css",
        debug         : true,
        outputStyle   : 'compressed',
        indentedSyntax: true,
        //prefix: __dirname
        //response      : true
        //prefix: '/prefix' // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/
        //log: function (severity, key, value) {
        //    console.log(severity, 'Error sass:', key, value);
        //}
    })
);
app.use('/cdn',express.static('static'));
//app.use('/static_virtual', express.static('static'));
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
    let soap_estados = new Promise((resolve, reject) => {
        var url = "http://127.0.0.1/ws-nusoap-php/server.php?wsdl";
        var params = {
            pais: 'mexico'
        };
        soap.createClient(url, function (err, client) {
            client.metodo_get_estados(params, function (err, result) {
                resolve(result.return.$value);
            });
        });
    });
    soap_estados.then((result) => {
        result.replace('<?xml version="1.0" encoding="UTF-8"?>', "");
        xml2js.Parser().parseString( ("<data>"+result+"</data>"), function (err, result_xml) {
            get_estados = result_xml.data.nombre;
        });
        var get_estados_array = [[]];
        var contador = 0;
        var fila = 0;
        var split = 3;
        get_estados.forEach(element => {
            if ((contador % split)===0) {
                fila++;
                get_estados_array[fila] = [];
            }
            get_estados_array[fila].push(element);
            contador++;
        });
        get_estados = get_estados_array;
        p_view = {
            titulo   : 'WS Consumer Estados: ',
            titulo_2 : 'Estados: ',
            url      : 'https://github.com/EduTel/ws-nusoap-php.git',
            estados_p: get_estados,
            xml_p    : result
        };
        // Compile the source code
        var index = pug.renderFile('view/index.pug', p_view);
        var view  = pug.renderFile('view/header.pug', {
            contenido: index
        });
        res.send(view);
        res.end();
        console.log("end");
    });
});
// POST method route
app.post('/', function (req, res, next) {
    res.send(view);
});
app.listen(3000, function () {
    //console.log("url: "+__dirname);
    //console.log('Example app listening on port 3000!');
});