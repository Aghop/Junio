import express, {Express} from 'express';
import router from './medico.network';

const medico: Express = express();
medico.use('/medico', router);

export default medico;