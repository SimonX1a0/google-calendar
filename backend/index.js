import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

await connectDB();

app.get("/", (req, res)=>{
    res.send("backend is running");
});

app.listen(4000, ()=>{
    console.log("server running on localhost:4000");
});