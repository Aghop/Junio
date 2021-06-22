"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var especialidad_network_1 = __importDefault(require("./especialidad.network"));
var especialidad = express_1.default();
especialidad.use('/especialidad', especialidad_network_1.default);
// especialidad.use('*', (req: Request, res: Response)=>{
//     res.status(404).send("Not found");
// });
exports.default = especialidad;
