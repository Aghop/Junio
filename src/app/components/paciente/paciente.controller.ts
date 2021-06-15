import pacienteRepository from "./paciente.repository";
import { Paciente } from "../../models/paciente.model";

function getPacientes() {
    let pacientes= pacienteRepository.getPacientes();
    return pacientes;
};

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


export default { getPacientes, getPacienteById, addPaciente }