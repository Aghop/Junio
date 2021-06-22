"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cita_repository_1 = __importDefault(require("./cita.repository"));
function getCita(id) {
    var citas = cita_repository_1.default.getCitas(id);
    if (citas != undefined) {
        return citas;
    }
    else
        return null;
}
;
function getCitaById(id) {
    var cita = cita_repository_1.default.getCitaById(id);
    if (cita != undefined) {
        return cita;
    }
    else
        return null;
}
function addCita(cita) {
    return cita_repository_1.default.addCita(cita);
}
function deleteCita(id) {
    return cita_repository_1.default.deleteCita(id);
}
function updateCita(cita) {
    return cita_repository_1.default.updateCita(cita);
}
exports.default = { getCita: getCita, getCitaById: getCitaById, addCita: addCita, deleteCita: deleteCita, updateCita: updateCita };
