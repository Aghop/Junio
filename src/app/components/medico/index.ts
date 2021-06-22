import express, {Express,Request, Response} from 'express';
import router from './medico.network';

const medico: Express = express();
medico.use('/medico', router);
// medico.use('*', (req: Request, res: Response)=>{
   
//     res.status(404).send("Not found");

// });

export default medico;