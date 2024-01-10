import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema({
    title: {type:String, required: true},
    desc: {type:String, required: true},
    subject: {type:String, required: true},
    frequency: {type:String, required: true},
    repeat: {type:String, required: true},
    time: {type:Date, required: true},
    createdAt: {type:Date, default:Date.now}
})

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;