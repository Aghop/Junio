import express, {Express,Request, Response} from 'express';
import router from './paciente.network';

const paciente: Express = express();
paciente.use('/paciente', router);
// paciente.use('*', (req: Request, res: Response)=>{
    
//     res.status(404).send("Not found");

// });

export default paciente;