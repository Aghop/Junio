import cors from "cors";


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

express.use(cors());



const Configuracion = {
    server: "127.0.0.1",
    port: 3000
};
app.use(bodyParser.urlencoded({
    extended: false
}));
app.listen(Configuracion, () => {
    console.log(`servidor escuchando ${Configuracion.server}: ${Configuracion.port}`);
});

//conexion bd
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'citasmedicas'
});

connection.connect(function (err: any) {
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

    app.post('/crearPaciente', (req: any, res: any) => {
        let nombre = req.body.nombre;
        let apellidos = req.body.apellidos;
        let rut = req.body.rut;
        let digVer = req.body.digVer;
        let direccion = req.body.direccion;
        let email = req.body.email;
        let username = req.body.username;
        let password = req.body.password;
        let idRegion = req.body.idRegion;
        let idComuna = req.body.idComuna;

        connection.query("INSERT INTO `paciente` (`nombre`,`apellidos`,`rut`,`digVer`,`direccion`,`email`,`username`,`password`,`idRegion`,`idComuna`) VALUES ('" + nombre + "','" + apellidos + "','" + rut + "','" + digVer + "','" + direccion + "','" + email + "','" + username + "','" + password + "','" + idRegion + "','" + idComuna + "');", (req1: any, res1: any) => {
            console.log(rut);
            console.log(req1);
            console.log(res1);
            res.status(201).send("-PACIENTE CREADO-");
        });

    });

/* -------------------------------- CITA -------------------------------- */

app.get('/paciente/:id/cita', (req: any, res: any) => {
    let id = req.params.id;
    connection.query("SELECT * FROM cita WHERE idPaciente=?", id, (req1: any, res1: any) => {
        console.log(res1);
        res.status(200).send(res1);
    });
});

app.delete('/delete/cita/:id', (req: any, res: any) => {
    let id = req.params.id;
    connection.query("DELETE FROM cita WHERE idmedico=?", id, (req1: any, res1: any) => {
        res.status(200).send("-CITA ELIMINADA-");
    });
});

app.post('/crearCita', (req: any, res: any) => {
    let fechaHora = req.body.fechaHora;
    let descripcion = req.body.descripcion;
    let idPaciente = req.body.idPaciente;
    let idMedico = req.body.idMedico;
    let idEstado = req.body.idEstado;

    connection.query("INSERT INTO `cita`(`fechaHora`, `descripcion`, `idPaciente`, `idMedico`, `idEstado`) VALUES ('" + fechaHora + "','" + descripcion + "','" + idPaciente + "','" + idMedico + "','" + idEstado + "')", (req1: any, res1: any) => {
        console.log(req1);
        console.log(res1);
        res.status(201).send("-CITA CREADA-");
    });
});

app.put('/actualizarCita', (req: any, res: any) => {
    let fechaHora = req.body.fechaHora;
    let descripcion = req.body.descripcion;
    let idPaciente = req.body.idPaciente;
    let idMedico = req.body.idMedico;
    let idEstado = req.body.idEstado;
    connection.query("UPDATE `cita` SET `fechaHora`='" + fechaHora + "',`descripcion`='" + descripcion + "',`idPaciente`='" + idPaciente + "',`idMedico`='" + idMedico + "',`idEstado`='" + idEstado + "' WHERE 1", (req1: any, res1: any) => {
        console.log(req1);
        console.log(res1);
        res.status(201).send("-CITA ACTUALIZADA-");
    });
});
/* ------------------------------- GET MEDICO ------------------------------- */

app.get('/medico', (req: any, res: any) => {
    connection.query("SELECT * FROM medico", (req1: any, res1: any) => {
        console.log(res1);
        res.status(200).send(res1);
    });
});

app.get('/medico/:id', (req: any, res: any) => {
    let id = req.params.id;
    connection.query("SELECT * FROM medico WHERE idmedico=?", id, (req1: any, res1: any) => {
        console.log(res1);
        res.status(200).send(res1);
    });
});

app.delete('/delete/medico/:id', (req: any, res: any) => {
    let id = req.params.id;
    connection.query("DELETE FROM medico WHERE idmedico=?", id, (req1: any, res1: any) => {
        res.status(200).send("-MEDICO ELIMINADO-");
    });

})

app.post('/crearMedico', (req: any, res: any) => {
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let rut = req.body.rut;
    let digVer = req.body.digVer;

    connection.query("INSERT INTO `medico` (`nombre`,`apellidos`,`rut`,`digVer`) VALUES ('" + nombre + "','" + apellidos + "','" + rut + "','" + digVer + "');", (req1: any, res1: any) => {
        console.log(req1);
        console.log(res1);
        res.status(201).send("-MEDICO CREADO-");
    });

});

/* ------------------------------------ GET BASURA ----------------------------------- */

app.get('/region', (req: any, res: any) => {
    connection.query("SELECT * FROM region", (req1: any, res1: any) => {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.get('/comuna', (req: any, res: any) => {
    connection.query("SELECT * FROM comuna", (req1: any, res1: any) => {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.get('/especialidad', (req: any, res: any) => {
    connection.query("SELECT * FROM especialidad", (req1: any, res1: any) => {
        console.log(res1);
        res.status(200).send(res1);
    });
});
app.get('/centroMedico', (req: any, res: any) => {
    connection.query("SELECT * FROM centromedico", (req1: any, res1: any) => {
        console.log(res1);
        res.status(200).send(res1);
    });
});

/* ------------------------- TERMINO FUNCIONES CRUD ------------------------- */

