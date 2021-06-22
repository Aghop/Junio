import express, { Response , Request } from "express";
import cors from "cors";
import components from "./components";
import mariaDBModule from "./modules/mariaDB.module";

const bodyParser = require('body-parser');

async function main() {

    /* --------------------------------- SERVER --------------------------------- */

    const app = express();
    
    const Configuracion = {
        server: "127.0.0.1",
        port: 3000
    };

    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(cors());

    app.use('/api', ...components);
     app.use('*', (req: Request, res: Response)=>{
         if(req.baseUrl === ''){
             res.send("Api Working");
     }else{
         res.status(404).send("Not Found");
     }
     });


    /* ------------------------------ BASE DE DATOS ----------------------------- */


    
    try {
        await mariaDBModule.connect();
        console.log('-CONNECTED SUCCESSFULLY-');
        
        app.listen(Configuracion, () => {
            console.log(`SERVER LISTENING ${Configuracion.server}:${Configuracion.port}`);
        });
    } catch (error) {
        console.log('-CONNECTION FAILED-');
    }
}
     
    
export default { main };