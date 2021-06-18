import express, {Express} from 'express';
import router from './comuna.network';

const comuna: Express = express();
comuna.use('/comuna', router);

export default comuna;