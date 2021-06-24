import express, {Express,Request, Response} from 'express';
import router from './admin.network';

const especialidad: Express = express();
especialidad.use('/admin', router);


export default especialidad;