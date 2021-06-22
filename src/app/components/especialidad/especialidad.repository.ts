import { Especialidad } from "../../models/especialidad.model";
import mariaDBModule from "../../modules/mariaDB.module";



async function getEspecialidades(){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM especialidad");
    return rows;
};


export default { getEspecialidades}