import express, {Express,Request, Response} from 'express';
import router from './especialidad.network';

const especialidad: Express = express();
especialidad.use('/especialidad', router);
// especialidad.use('*', (req: Request, res: Response)=>{
    
//     res.status(404).send("Not found");

// });

export default especialidad;