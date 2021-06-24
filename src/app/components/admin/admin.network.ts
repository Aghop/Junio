import express, { Router, Request, Response } from "express";
import adminController from "./admin.controller";

const router: Router = express.Router();

router.get('/all', async (req: Request, res: Response) => {
    let admins;
    try {
        admins = await adminController.getAdmins();
        res.send(admins);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;