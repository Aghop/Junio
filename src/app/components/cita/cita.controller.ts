import citaRepository from "./cita.repository";
import { Cita } from "../../models/cita.model";

function getCita(id: String) {
    let citas= citaRepository.getCitas(id);
    if (citas != undefined) {
        return citas;
    } else
        return null;
};

function getCitaById(id: String) {
    let cita = citaRepository.getCitaById(id);
    if (cita != undefined) {
        return cita;
    } else
        return null;
}

function addCita(cita: Cita){
    return citaRepository.addCita(cita);
}

function deleteCita (id: string) {
    return citaRepository.deleteCita(id);
}

function updateCita(cita: Cita){
    return citaRepository.updateCita(cita);
}
  

export default { getCita, getCitaById, addCita, deleteCita, updateCita }