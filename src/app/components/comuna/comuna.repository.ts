import { Comuna } from "../../models/comuna.model";
import mariaDBModule from "../../modules/mariaDB.module";



async function getComunas(){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM comuna");
    return rows;
};


export default { getComunas}