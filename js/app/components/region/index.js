"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var region_network_1 = __importDefault(require("./region.network"));
var region = express_1.default();
region.use('/region', region_network_1.default);
// region.use('*', (req: Request, res: Response)=>{
//     res.status(404).send("Not found");
// });
exports.default = region;
