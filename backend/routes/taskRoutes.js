import express from "express"
import { createTask, updateTask, readTask, readAllTasks, deleteTask } from "../controllers/taskControllers.js"

const taskRouter = express.Router();

taskRouter.get("/", readAllTasks);
taskRouter.get("/:id", readTask);
taskRouter.post("/", createTask);
taskRouter.patch("/:id", updateTask);
taskRouter.delete("/:id", deleteTask);

export default taskRouter;