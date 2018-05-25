import { express_module} from './config/express';
const app = express_module.__express();
app.listen(3000, function () {
    console.log("**********************************Iniciando servidor express**********************************");
    console.log("url: " + __dirname);
});