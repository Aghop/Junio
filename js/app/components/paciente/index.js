"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var paciente_network_1 = __importDefault(require("./paciente.network"));
var paciente = express_1.default();
paciente.use('/paciente', paciente_network_1.default);
// paciente.use('*', (req: Request, res: Response)=>{
//     res.status(404).send("Not found");
// });
exports.default = paciente;
