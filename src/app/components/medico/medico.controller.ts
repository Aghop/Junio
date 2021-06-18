import medicoRepository from "./medico.repository";
import { Medico } from "../../models/medico.model";

function getMedicos() {
    return medicoRepository.getMedicos();
   
};

function getMedicoById(id: String) {
    let medico = medicoRepository.getMedicoById(id);
    if (medico != undefined) {
        return medico;
    } else
        return null;
}

function addMedico(paciente: Medico){
    return medicoRepository.addMedico(paciente);
}
function deleteMedico(id: String){
    return medicoRepository.deleteMedico(id);
}


export default { getMedicos, getMedicoById, addMedico, deleteMedico }