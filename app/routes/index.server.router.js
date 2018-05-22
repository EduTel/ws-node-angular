module.exports = function (app) {
    var index = require('../controller/index.server.controller');
    //**********************************GET**********************************
    app.get('/', index.render);
    //**********************************POST**********************************
    //app.post('/', function (req, res, next) {
    //    res.send(view);
    //});
}