"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var admin_network_1 = __importDefault(require("./admin.network"));
var especialidad = express_1.default();
especialidad.use('/admin', admin_network_1.default);
exports.default = especialidad;
