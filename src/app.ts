import express from "express";
import bodyParser from "body-parser";
import swapController from "./controllers/swapController";
import healthCheckController from "./controllers/runingCheckController";

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/swap", swapController);
app.use("/run", healthCheckController);

export default app;
