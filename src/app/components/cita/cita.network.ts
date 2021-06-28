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
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let cita;
    try {
        cita = await citaController.getCitaById(id);
        res.send(cita);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.post('/', async (req: Request, res: Response) => {
    const cita = req.body;
    
    try {
        const newCita = await citaController.addCita(cita);
        res.send(newCita);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.delete('/delete/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let cita;
    try {
        cita = await citaController.deleteCita(id);
        res.send(cita);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.put('/update/', async (req: Request, res: Response) => {
    const cita = req.body;
    console.log(req.body);
    try {
        const updatedCita = await citaController.updateCita(cita);
        res.send(updatedCita);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;