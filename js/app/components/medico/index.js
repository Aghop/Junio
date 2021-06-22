"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var medico_network_1 = __importDefault(require("./medico.network"));
var medico = express_1.default();
medico.use('/medico', medico_network_1.default);
// medico.use('*', (req: Request, res: Response)=>{
//     res.status(404).send("Not found");
// });
exports.default = medico;
