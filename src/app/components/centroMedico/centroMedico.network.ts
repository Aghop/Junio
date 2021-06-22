import express, { Router, Request, Response } from "express";
import { CentroMedico } from "../../models/centroMedico.model";
import centroMedicoController from "./centroMedico.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    let centrosMedicos;
    try {
        centrosMedicos = await centroMedicoController.getCentrosMedicos();
        res.send(centrosMedicos);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;