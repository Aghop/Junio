"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var centroMedico_repository_1 = __importDefault(require("./centroMedico.repository"));
function getCentrosMedicos() {
    var citas = centroMedico_repository_1.default.getCentrosMedicos();
    if (citas != undefined) {
        return citas;
    }
    else
        return null;
}
;
exports.default = { getCentrosMedicos: getCentrosMedicos };
