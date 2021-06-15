"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
express.use(cors_1.default());
var Configuracion = {
    server: "127.0.0.1",
    port: 3000
};
app.use(bodyParser.urlencoded({
    extended: false
}));
app.listen(Configuracion, function () {
    console.log("servidor escuchando " + Configuracion.server + ": " + Configuracion.port);
});
//conexion bd
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'citasmedicas'
});
connection.connect(function (err) {
    if (err) {
        console.error('error conectando: ' + err.stack);
        return;
    }
    console.log('conectado como id: ' + connection.threadId);
});
/* ------------------------------ PACIENTE ------------------------------ */
// app.get('/paciente', (req: any, res: any) => {
//     connection.query("SELECT * FROM paciente", (req1: any, res1: any) => {
//         console.log(res1);
//         res.status(200).send(res1);
//     });
// });
// app.get('/paciente/:id', (req: any, res: any) => {
//     let id = req.params.id;
//     connection.query("SELECT * FROM paciente WHERE idPaciente=?", id, (req1: any, res1: any) => {
//         console.log(res1);
//         res.status(200).send(res1);
//     });
// }),
app.post('/crearPaciente', function (req, res) {
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos;
    var rut = req.body.rut;
    var digVer = req.body.digVer;
    var direccion = req.body.direccion;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var idRegion = req.body.idRegion;
    var idComuna = req.body.idComuna;
    connection.query("INSERT INTO `paciente` (`nombre`,`apellidos`,`rut`,`digVer`,`direccion`,`email`,`username`,`password`,`idRegion`,`idComuna`) VALUES ('" + nombre + "','" + apellidos + "','" + rut + "','" + digVer + "','" + direccion + "','" + email + "','" + username + "','" + password + "','" + idRegion + "','" + idComuna + "');", function (req1, res1) {
        console.log(rut);
        console.log(req1);
        console.log(res1);
        res.status(201).send("-PACIENTE CREADO-");
    });
});
/* -------------------------------- CITA -------------------------------- */
app.get('/paciente/:id/cita', function (req, res) {
    var id = req.params.id;
    connection.query("SELECT * FROM cita WHERE idPaciente=?", id, function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.delete('/delete/cita/:id', function (req, res) {
    var id = req.params.id;
    connection.query("DELETE FROM cita WHERE idmedico=?", id, function (req1, res1) {
        res.status(200).send("-CITA ELIMINADA-");
    });
});
app.post('/crearCita', function (req, res) {
    var fechaHora = req.body.fechaHora;
    var descripcion = req.body.descripcion;
    var idPaciente = req.body.idPaciente;
    var idMedico = req.body.idMedico;
    var idEstado = req.body.idEstado;
    connection.query("INSERT INTO `cita`(`fechaHora`, `descripcion`, `idPaciente`, `idMedico`, `idEstado`) VALUES ('" + fechaHora + "','" + descripcion + "','" + idPaciente + "','" + idMedico + "','" + idEstado + "')", function (req1, res1) {
        console.log(req1);
        console.log(res1);
        res.status(201).send("-CITA CREADA-");
    });
});
app.put('/actualizarCita', function (req, res) {
    var fechaHora = req.body.fechaHora;
    var descripcion = req.body.descripcion;
    var idPaciente = req.body.idPaciente;
    var idMedico = req.body.idMedico;
    var idEstado = req.body.idEstado;
    connection.query("UPDATE `cita` SET `fechaHora`='" + fechaHora + "',`descripcion`='" + descripcion + "',`idPaciente`='" + idPaciente + "',`idMedico`='" + idMedico + "',`idEstado`='" + idEstado + "' WHERE 1", function (req1, res1) {
        console.log(req1);
        console.log(res1);
        res.status(201).send("-CITA ACTUALIZADA-");
    });
});
/* ------------------------------- GET MEDICO ------------------------------- */
app.get('/medico', function (req, res) {
    connection.query("SELECT * FROM medico", function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.get('/medico/:id', function (req, res) {
    var id = req.params.id;
    connection.query("SELECT * FROM medico WHERE idmedico=?", id, function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.delete('/delete/medico/:id', function (req, res) {
    var id = req.params.id;
    connection.query("DELETE FROM medico WHERE idmedico=?", id, function (req1, res1) {
        res.status(200).send("-MEDICO ELIMINADO-");
    });
});
app.post('/crearMedico', function (req, res) {
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos;
    var rut = req.body.rut;
    var digVer = req.body.digVer;
    connection.query("INSERT INTO `medico` (`nombre`,`apellidos`,`rut`,`digVer`) VALUES ('" + nombre + "','" + apellidos + "','" + rut + "','" + digVer + "');", function (req1, res1) {
        console.log(req1);
        console.log(res1);
        res.status(201).send("-MEDICO CREADO-");
    });
});
/* ------------------------------------ GET BASURA ----------------------------------- */
app.get('/region', function (req, res) {
    connection.query("SELECT * FROM region", function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.get('/comuna', function (req, res) {
    connection.query("SELECT * FROM comuna", function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.get('/especialidad', function (req, res) {
    connection.query("SELECT * FROM especialidad", function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.get('/centroMedico', function (req, res) {
    connection.query("SELECT * FROM centromedico", function (req1, res1) {
        console.log(res1);
        res.status(200).send(res1);
    });
});
/* ------------------------- TERMINO FUNCIONES CRUD ------------------------- */
