import express from "express"
import { createTask, updateTask, readTask, readAllTasks, deleteTask } from "../controllers/taskControllers.js"

const router = express.Router();

router.get("/", readAllTasks);
router.get("/:id", readTask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default taskRouter;