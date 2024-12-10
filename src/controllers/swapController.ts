import express, { Request, Response } from "express";
import { fetchLiquidityData } from "../services/dexService";
import { calculateOptimalRoute } from "../services/routingService";
import { createSwapTransaction } from "../services/transactionService";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const { amount, fromToken, toToken, userAddress } = req.body;

        // Fetch liquidity data from DEXes
        const dexData = await fetchLiquidityData();

        // Calculate the best route
        const routes = calculateOptimalRoute(amount, dexData, fromToken, toToken);

        // Create the CBOR transaction
        const cborTransaction = await createSwapTransaction(routes, userAddress);

        res.json({ transaction: cborTransaction });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing swap request");
    }
});

export default router;
