import Task from "../models/Task.js"

export async function createTask(req, res){
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function updateTask(req, res){
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!task) return res.status(404).json({error: "Task not found"});
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function readAllTasks(req, res){
    try {
        const tasks = await Task.find();
        if(!tasks) return res.status(500).json({error: "server error"});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export async function readTask(req, res){
    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({error: "Task not found"});
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function deleteTask(req, res){
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({error: "Task not found"});
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({error: error});
    }
}