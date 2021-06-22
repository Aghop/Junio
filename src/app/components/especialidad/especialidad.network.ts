import express, { Router, Request, Response } from "express";
import { Especialidad } from "../../models/especialidad.model";
import especialidadController from "./especialidad.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    let especialidades;
    try {
        especialidades = await especialidadController.getEspecialidades();
        res.send(especialidades);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;