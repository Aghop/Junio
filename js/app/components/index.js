"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var admin_1 = __importDefault(require("./admin"));
var centroMedico_1 = __importDefault(require("./centroMedico"));
var cita_1 = __importDefault(require("./cita"));
var comuna_1 = __importDefault(require("./comuna"));
var especialidad_1 = __importDefault(require("./especialidad"));
var medico_1 = __importDefault(require("./medico"));
var paciente_1 = __importDefault(require("./paciente"));
var region_1 = __importDefault(require("./region"));
var components = [
    centroMedico_1.default,
    cita_1.default,
    comuna_1.default,
    especialidad_1.default,
    medico_1.default,
    paciente_1.default,
    region_1.default,
    admin_1.default
];
exports.default = components;
