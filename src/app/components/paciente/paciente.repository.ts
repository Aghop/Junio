import { Paciente } from "../../models/paciente.model";
import mariaDBModule from "../../modules/mariaDB.module";



async function getPacientes(){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM paciente");
    return rows;
};

async function getPacienteLogin(username: String,password: String){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("SELECT * FROM paciente WHERE username=? and password=md5(?)",[username, password]);
    return row;
}

async function getPacienteById(id: String){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("SELECT * FROM paciente WHERE idPaciente=?",id);
    return row;
}

async function addPaciente(paciente: Paciente){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("INSERT INTO `paciente` (`nombre`,`apellidos`,`rut`,`digVer`,`direccion`,`email`,`username`,`password`,`idRegion`,`idComuna`) VALUES ('" + paciente.nombre + "','" + paciente.apellidos + "','" + paciente.rut + "','" + paciente.digVer + "','" + paciente.direccion + "','" + paciente.email + "','" + paciente.username + "',md5('" + paciente.password + "'),'" + paciente.idRegion + "','" + paciente.idComuna + "');");
    return row;
}

export default { getPacientes, getPacienteById, addPaciente,getPacienteLogin }