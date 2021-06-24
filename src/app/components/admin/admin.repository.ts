import mariaDBModule from "../../modules/mariaDB.module";



async function getAdmins(){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM admin");
    return rows;
};


export default { getAdmins}