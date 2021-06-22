"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var centroMedico_network_1 = __importDefault(require("./centroMedico.network"));
var centroMedico = express_1.default();
centroMedico.use('/centroMedico', centroMedico_network_1.default);
// centroMedico.use('*', (req: Request, res: Response)=>{
//     res.status(404).send("Not found");
// });
exports.default = centroMedico;
