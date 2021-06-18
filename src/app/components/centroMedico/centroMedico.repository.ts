import { CentroMedico } from "../../models/centroMedico.model";
import mariaDBModule from "../../modules/mariaDB.module";



async function getCentrosMedicos(){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM centromedico");
    console.log(rows[0]);
    return rows;
};

export default { getCentrosMedicos }