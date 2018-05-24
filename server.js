//import { express } from "./config/express";
//import * as express from "./config/express";
//import * as express from './config/express';
var express = require("./config/express");
var app = express();
app.listen(3000, function () {
    console.log("**********************************Iniciando servidor express**********************************");
    console.log("url: " + __dirname);
});
