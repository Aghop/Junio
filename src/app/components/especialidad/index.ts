import express, {Express} from 'express';
import router from './especialidad.network';

const especialidad: Express = express();
especialidad.use('/especialidad', router);

export default especialidad;