"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medico_repository_1 = __importDefault(require("./medico.repository"));
function getMedicos() {
    return medico_repository_1.default.getMedicos();
}
;
function getMedicoById(id) {
    var medico = medico_repository_1.default.getMedicoById(id);
    if (medico != undefined) {
        return medico;
    }
    else
        return null;
}
function addMedico(paciente) {
    return medico_repository_1.default.addMedico(paciente);
}
function deleteMedico(id) {
    return medico_repository_1.default.deleteMedico(id);
}
exports.default = { getMedicos: getMedicos, getMedicoById: getMedicoById, addMedico: addMedico, deleteMedico: deleteMedico };
