const express = require("./config/express");
const app = express();
app.listen(3000, function () {
    console.log("**********************************Iniciando servidor express**********************************");
    console.log("url: " + __dirname);
});
