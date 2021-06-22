import express, { Router, Request, Response } from "express";
import { Medico } from "../../models/medico.model";
import medicoController from "./medico.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    let medicos;
    try {
        medicos = await medicoController.getMedicos();
        res.send(medicos);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    let id = req.params.id;
    let medico;
    try {
        medico = await medicoController.getMedicoById(id);
        res.send(medico);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

router.post('/', async (req: Request, res: Response) => {
    const medico = req.body;
    console.log(req.body);
    try {
        const newMedico = await medicoController.addMedico(medico);
        res.send(newMedico);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});
router.delete('/delete/:id', async (req:Request, res: Response) =>{
    let id = req.params.id;
    let medico;
    try {
        medico = await medicoController.deleteMedico(id);
        res.send("MEDICO-ELIMINADO");
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
})

export default router;