import express, {Express ,Request, Response} from 'express';
import router from './region.network';

const region: Express = express();
region.use('/region', router);
// region.use('*', (req: Request, res: Response)=>{
    
//     res.status(404).send("Not found");

// });

export default region;