import express from "express"
import { createInterval, updateInterval, readAllIntervals, readInterval, deleteInterval } from "../controllers/intervalControllers.js"

const intervalRouter = express.Router();

intervalRouter.get("/", readAllIntervals);
intervalRouter.get("/:id", readInterval);
intervalRouter.post("/", createInterval);
intervalRouter.patch("/:id", updateInterval);
intervalRouter.delete("/:id", deleteInterval);

export default intervalRouter;