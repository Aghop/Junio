import express, { Router, Request, Response } from "express";
import adminController from "./admin.controller";

const router: Router = express.Router();

router.get('/login', async (req: Request, res: Response) => {
    let admins;
    const username:any = req.query.username;
    const password:any = req.query.password;
    try {
        admins = await adminController.getAdmin(username,password);
        res.send(admins);
    } catch (error) {
        res.status(500).send({ error: "Unexpected error" })
    }
});

export default router;