"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var comuna_network_1 = __importDefault(require("./comuna.network"));
var comuna = express_1.default();
comuna.use('/comuna', comuna_network_1.default);
// comuna.use('*', (req: Request, res: Response)=>{
//     res.status(404).send("Not found");
// });
exports.default = comuna;
