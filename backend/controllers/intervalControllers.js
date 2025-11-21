import Interval from "../models/Interval.js"

export async function createInterval(req, res){
    try {
        const interval = await Interval.create(req.body);
        res.status(201).json(interval);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function updateInterval(req, res){
try {
    const interval = await Interval.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    if(!interval) return res.status(404).json({error: "Interval not found"});

    res.status(200).json(interval);
} catch (error) {
    res.status(400).json({error: error});
}
}

export async function readAllIntervals(req, res){
    try {
        const intervals = await Interval.find();
        res.status(200).json(intervals);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export async function readInterval(req, res){
    try {
        const interval = await Interval.findById(req.params.id);
        if(!interval) return res.status(404).json({error: "Interval not found"});
        res.status(200).json(interval);
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export async function deleteInterval(req, res){
    try {
        const interval = await Interval.findByIdAndDelete(req.params.id);
        if(!interval) return res.status(404).json({error: "Interval not found"});
        res.status(200).json(interval);
    } catch (error) {
        res.status(400).json({error: error});
    }
}