import mongoose from "mongoose"

const IntervalSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, defualt: "Sample"},
        color: {type: String, required: true, default: "#ff5151"},
        start: {type: Date, required: true, defualt: new Date()},
        end: {type: Date, required: true, defualt: new Date()}
    }
);

const Interval = mongoose.model("Interval", IntervalSchema);

export default Interval;