"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var especialidad_repository_1 = __importDefault(require("./especialidad.repository"));
function getEspecialidades() {
    var especialidades = especialidad_repository_1.default.getEspecialidades();
    if (especialidades != undefined) {
        return especialidades;
    }
    else
        return null;
}
;
exports.default = { getEspecialidades: getEspecialidades };
