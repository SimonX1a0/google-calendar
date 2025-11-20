import express from "express"
import { createInterval, updateInterval, readAllIntervals, readInterval, deleteInterval } from "../controllers/intervalControllers.js"

const router = express.Router();

router.get("/", readAllIntervals);
router.get("/:id", readInterval);
router.post("/", createInterval);
router.patch("/:id", updateInterval);
router.delete("/:id", deleteInterval);

export default intervalRouter;