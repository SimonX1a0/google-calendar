import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import taskRouter from "./routes/taskRoutes.js";
import intervalRouter from "./routes/intervalRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

await connectDB();

app.use("/api/tasks", taskRouter);
app.use("/api/intervals", intervalRouter);

app.listen(4000, ()=>{
    console.log("server running on localhost:4000");
});