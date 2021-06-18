import express, { Router, Request, Response } from "express";
import { Cita } from "../../models/cita.model";
import citaController from "./cita.controller";

const router: Router = express.Router();

router.get('/:id/all', async (req: Request, res: Response) => {
    let id = req.params.id;
    let citas;
    try {
        citas = await citaController.getCita(id);
        res.send(citas);
    } catch (error) {
        res.send({ error: "Unexpected error" })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let cita;
    try {
        cita = await citaController.getCitaById(id);
        res.send(cita);
    } catch (error) {
        res.send({ error: "Unexpected error" })
    }
});

router.post('/', async (req: Request, res: Response) => {
    const cita = req.body;
    console.log(req.body);
    try {
        const newCita = await citaController.addCita(cita);
        res.send(newCita);
    } catch (error) {
        res.send({ error: "Unexpected error" })
    }
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let cita;
    try {
        cita = await citaController.deleteCita(id);
        res.send("CITA-ELIMINADA");
    } catch (error) {
        res.send({ error: "Unexpected error" })
    }
});

export default router;