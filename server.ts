//import { express } from "./config/express";

//import * as express from "./config/express";
import { express_module} from './config/express';
//const express = require("./config/express");
const app = express_module.__express();
app.listen(3000, function () {
    console.log("**********************************Iniciando servidor express**********************************");
    console.log("url: " + __dirname);
});
