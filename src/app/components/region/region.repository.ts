import { Region } from "../../models/region.model";
import mariaDBModule from "../../modules/mariaDB.module";



async function getRegiones(){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM region");
    return rows;
};


export default { getRegiones}