import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Backend is running!");
});

export default router;
