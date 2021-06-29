import express, { Router, Request, Response } from "express";
import { Paciente } from "../../models/paciente.model";
import pacienteController from "./paciente.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    let pacientes;
    try {
        pacientes = await pacienteController.getPacientes();
        res.send(pacientes);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.get('/login', async (req: Request, res: Response) => {
    let pacientes;
    const username:any = req.query.username;
    const password:any = req.query.password;


    try {
        pacientes = await pacienteController.getPacienteLogin(username,password);
        res.send(pacientes);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});
router.get('/recuperar', async (req: Request, res: Response) => {
    let paciente;
    const email:any = req.query.email;
    const pregunta:any = req.query.pregunta;
    const respuesta:any = req.query.respuesta;

    try {
        paciente = await pacienteController.getPacienteRecuperar(email,pregunta,respuesta);
        res.send(paciente);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});
router.get('/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let paciente;
    try {
        paciente = await pacienteController.getPacienteById(id);
        res.send(paciente);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.post('/', async (req: Request, res: Response) => {
    const paciente = req.body;
    console.log(req.body);
    try {
        const newPaciente = await pacienteController.addPaciente(paciente);
        res.send(newPaciente);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});
router.put('/update/', async (req: Request, res: Response) => {
    const paciente = req.body;
    console.log(req.body);
    try {
        const updatedPaciente = await pacienteController.updatePaciente(paciente);
        res.send(updatedPaciente);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;