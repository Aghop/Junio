import { Medico } from "../../models/medico.model";
import mariaDBModule from "../../modules/mariaDB.module";



async function getMedicos(){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM medico");
    return rows;
};

async function getMedicoById(id: String){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("SELECT * FROM medico WHERE idmedico=?",id);
    return row;
}

async function addMedico(medico: Medico){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("INSERT INTO `doctor` (`nombre`,`apellidos`,`rut`,`digVer`,`idEspecialidad`,`idCentroMedico`) VALUES ('" + medico.nombre + "','" + medico.apellidos + "','" + medico.rut + "','" + medico.digVer + "','" + medico.idEspecialidad + "','" + medico.idcentroMedico+ "');");
    return row;
}
async function deleteMedico(id: String){
    let row;
    let connection = await mariaDBModule.connect();
    row= await connection.query("DELETE FROM doctor WHERE idmedico=?",id);
    return row;
}

export default { getMedicos, getMedicoById, addMedico, deleteMedico }