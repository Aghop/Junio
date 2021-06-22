import express, { Router, Request, Response } from "express";
import { Comuna } from "../../models/comuna.model";
import comunaController from "./comuna.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    let comunas;
    try {
        comunas = await comunaController.getComunas();
        res.send(comunas);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;