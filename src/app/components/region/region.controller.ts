import regionRepository from "./region.repository";
import { Region } from "../../models/region.model";

function getRegiones() {
    let regiones= regionRepository.getRegiones();
    if (regiones != undefined) {
        return regiones;
    } else
        return null;
};


export default { getRegiones}