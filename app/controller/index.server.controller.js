//**********************************Motor de vista**********************************
var pug = require('pug');
//**********************************Require**********************************
var soap   = require('soap'); //WS
var xml2js = require('xml2js'); //XML
var f      = new Date();
function array_ordenar(p_data,p_split=0) {
    var cast_array = [[]];
    var contador   = 0;
    var fila       = 0;
    var split      = p_split;
    p_data.forEach(element => {
        if ((contador % split) === 0) {
            fila++;
            cast_array[fila] = [];
        }
        cast_array[fila].push(element);
        contador++;
    });
    return cast_array;
}
function soap_promise(p_url=null,p_metodo=null, p_params=null) {
    if (p_url !== null && p_params!=null){
        let soap_estados = new Promise((resolve, reject) => {
            soap.createClient(p_url, function (err, client) {
                client[p_metodo](p_params, function (err, result) {
                    resolve(result.return.$value);
                });
            });
        });
        return soap_estados;
    }
}
module.exports.estados = function (req, res) {
    console.warn('Request URL:', req.originalUrl);
    console.warn('Request Type:', req.method);
    console.warn('Time:', f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear());
    soap_estados = soap_promise("http://127.0.0.1/ws-nusoap-php/server.php?wsdl", "metodo_get_estados", { pais: 'mexico' });
    soap_estados.then((result) => {
        result.replace('<?xml version="1.0" encoding="UTF-8"?>', "");
        xml2js.Parser().parseString( ("<data>"+result+"</data>"), function (err, result_xml) {
            get_estados = result_xml.data.nombre;
        });
        result_array = array_ordenar(get_estados,4);
        var p_view = {
            titulo   : 'Codigos postales',
            titulo_2 : 'Estados',
            estados_p: result_array
        };
        // Compile the source code
        var index = pug.renderFile('./app/views/compile/pug/index.pug', p_view);
        var view  = pug.renderFile('./app/views/compile/pug/header.pug', { contenido: index });
        res.send(view);
        res.end();
    });   
};
module.exports.busqueda = function (req, res) {
    console.warn('municipios');
};