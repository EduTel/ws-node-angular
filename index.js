var express = require('express');
const pug   = require('pug');
var app     = express();
// GET method route
app.get('/', function (req, res) {
    res.send(pug.render('p Hello world!'));
});
//app.get('/', (req, res) => res.send('Hello World!'))
// POST method route
app.post('/', function (req, res) {
    res.send(pug.render('p Hello world!'));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});