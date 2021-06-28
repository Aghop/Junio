import mariaDBModule from "../../modules/mariaDB.module";



async function getAdmin(username: string,password: string){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM admin WHERE username=? and password=md5(?)",[username,password]);
    return rows;
};


export default { getAdmin}