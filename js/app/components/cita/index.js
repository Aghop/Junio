"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cita_network_1 = __importDefault(require("./cita.network"));
var cita = express_1.default();
cita.use('/cita', cita_network_1.default);
// cita.use('*', (req: Request, res: Response)=>{
//     res.status(404).send("Not found");
// });
exports.default = cita;
