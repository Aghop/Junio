"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var region_repository_1 = __importDefault(require("./region.repository"));
function getRegiones() {
    var regiones = region_repository_1.default.getRegiones();
    if (regiones != undefined) {
        return regiones;
    }
    else
        return null;
}
;
exports.default = { getRegiones: getRegiones };
