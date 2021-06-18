import comunaRepository from "./comuna.repository";
import { Comuna } from "../../models/comuna.model";

function getComunas() {
    let comunas= comunaRepository.getComunas();
    if (comunas != undefined) {
        return comunas;
    } else
        return null;
};


export default { getComunas}