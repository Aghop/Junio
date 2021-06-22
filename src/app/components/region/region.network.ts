import express, { Router, Request, Response } from "express";
import { Region } from "../../models/region.model";
import regionController from "./region.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    let regiones;
    try {
        regiones = await regionController.getRegiones();
        res.send(regiones);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;