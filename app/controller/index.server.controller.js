exports.render = function (req,res) {
    //**********************************Motor de vista**********************************
    var pug = require('pug');
    //**********************************Require**********************************
    var soap = require('soap'); //WS
    var xml2js = require('xml2js'); //XML
    var f = new Date();
    console.log('Request URL:', req.originalUrl);
    console.log('Request Type:', req.method);
    console.log('Time:', f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
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
        var contador          = 0;
        var fila              = 0;
        var split             = 3;
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
            titulo   : 'Codigos postales',
            titulo_2 : 'Estados: ',
            url      : 'https://github.com/EduTel/ws-nusoap-php.git',
            estados_p: get_estados,
            xml_p    : result
        };
        // Compile the source code
        var index = pug.renderFile('./app/views/compile/pug/index.pug', p_view);
        var view  = pug.renderFile('./app/views/compile/pug/header.pug', { contenido: index });
        res.send(view);
        res.end();
        console.log("end");
    });   
};