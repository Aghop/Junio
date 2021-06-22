import express, {Express,Request, Response} from 'express';
import router from './comuna.network';

const comuna: Express = express();
comuna.use('/comuna', router);
// comuna.use('*', (req: Request, res: Response)=>{
    
//     res.status(404).send("Not found");

// });

export default comuna;