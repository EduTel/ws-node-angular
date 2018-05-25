"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("./config/express");
const app = express_1.express_module.__express();
app.listen(3000, function () {
    console.log("**********************************Iniciando servidor express**********************************");
    console.log("url: " + __dirname);
});
//# sourceMappingURL=server.js.map