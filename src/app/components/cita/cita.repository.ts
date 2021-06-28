import { Cita } from "../../models/cita.model";
import mariaDBModule from "../../modules/mariaDB.module";



async function getCitas(id: String){
    let rows;
    let connection = await mariaDBModule.connect();
    rows = await connection.query("SELECT * FROM cita WHERE idPaciente=?",id);
    return rows;
};

async function getCitaById(id: String){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("SELECT * FROM cita WHERE idcita=?",id);
    return row;
}

async function addCita(cita: Cita){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("INSERT INTO `cita` (`fechaHora`,`descripcion`,`idPaciente`,`idMedico`,`idEstado`) VALUES ('" + cita.fechaHora + "','" + cita.descripcion + "','" + cita.idPaciente + "','" + cita.idMedico + "','" + cita.idEstado + "');");
    return row;
}

async function deleteCita(id: string){
        let row;
        let connection = await mariaDBModule.connect();
        row = await connection.query("DELETE FROM cita WHERE idcita=?", id);
        return row;
}

async function updateCita(cita: Cita){
    let row;
    let connection = await mariaDBModule.connect();
    row = await connection.query("UPDATE `cita` SET `fechaHora`='" + cita.fechaHora + "',`descripcion`='" + cita.descripcion + "',`idPaciente`='" + cita.idPaciente + "',`idMedico`='" + cita.idMedico + "',`idEstado`='" + cita.idEstado + "' WHERE idcita=?", cita.idcita);
    return row;
}
     
export default { getCitas, getCitaById, addCita, deleteCita, updateCita }