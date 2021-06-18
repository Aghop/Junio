import especialidadRepository from "./especialidad.repository";
import { Especialidad } from "../../models/especialidad.model";

function getEspecialidades() {
    let especialidades= especialidadRepository.getEspecialidades();
    if (especialidades != undefined) {
        return especialidades;
    } else
        return null;
};


export default { getEspecialidades}