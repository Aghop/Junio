import centroMedicoRepository from "./centroMedico.repository";
import { CentroMedico } from "../../models/centroMedico.model";

function getCentrosMedicos() {
    let citas= centroMedicoRepository.getCentrosMedicos();
    if (citas != undefined) {
        return citas;
    } else
        return null;
};




export default { getCentrosMedicos}