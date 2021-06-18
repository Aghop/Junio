import express, {Express} from 'express';
import router from './cita.network';

const cita: Express = express();
cita.use('/cita', router);

export default cita;