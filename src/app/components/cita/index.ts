import express, {Express,Request, Response} from 'express';
import router from './cita.network';

const cita: Express = express();
cita.use('/cita', router);
// cita.use('*', (req: Request, res: Response)=>{
    
//     res.status(404).send("Not found");

// });

export default cita;