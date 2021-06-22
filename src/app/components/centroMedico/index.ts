import express, {Express,Request, Response} from 'express';
import router from './centroMedico.network';

const centroMedico: Express = express();
centroMedico.use('/centroMedico', router);
// centroMedico.use('*', (req: Request, res: Response)=>{
    
//     res.status(404).send("Not found");

// });

export default centroMedico;