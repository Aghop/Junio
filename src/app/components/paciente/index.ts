import express, {Express} from 'express';
import router from './paciente.network';

const paciente: Express = express();
paciente.use('/paciente', router);

export default paciente;