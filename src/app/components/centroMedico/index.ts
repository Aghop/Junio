import express, {Express} from 'express';
import router from './centroMedico.network';

const centroMedico: Express = express();
centroMedico.use('/centroMedico', router);

export default centroMedico;