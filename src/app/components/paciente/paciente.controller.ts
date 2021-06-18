import pacienteRepository from "./paciente.repository";
import { Paciente } from "../../models/paciente.model";

function getPacientes() {
    return pacienteRepository.getPacientes();
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