import pacienteRepository from "./paciente.repository";
import { Paciente } from "../../models/paciente.model";

function getPacientes() {
    return pacienteRepository.getPacientes();
};

function getPacienteLogin(username: String,password: String){
    let paciente = pacienteRepository.getPacienteLogin(username,password);
    if (paciente != undefined) {
        return paciente;
    } else
        return null;
}
function getPacienteRecuperar(email: String,pregunta: number, respuesta: String){
    let paciente = pacienteRepository.getPacienteRecuperar(email,pregunta,respuesta);
    if (paciente != undefined) {
        return paciente;
    } else
        return null;
}

function getPacienteById(id: String) {
    let paciente = pacienteRepository.getPacienteById(id);
    if (paciente != undefined) {
        return paciente;
    } else
        return null;
}

function addPaciente(paciente: Paciente){
    return pacienteRepository.addPaciente(paciente);
}
function updatePaciente(paciente: Paciente){
    return pacienteRepository.updatePaciente(paciente);
}
export default { getPacientes, getPacienteById, addPaciente, getPacienteLogin , getPacienteRecuperar, updatePaciente}