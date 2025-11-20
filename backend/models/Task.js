import mongoose from "mongoose"

const taskSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, default: ""},
        color: {type: String, required: true, default: "#ff5151"},
        category: {type: String, required: true, default: "work"},
        total: {type: Number, required: true, default: 0}
    }
);

const Task = mongoose.model("Task",taskSchema);

export default Task;