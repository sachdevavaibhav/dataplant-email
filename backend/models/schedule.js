import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: 1,
        trim: true
    },
    desc: {
        type: String,
        required: [true, "description is required"],
        minLengthL: 1,
        trim: true
    },
    subject: {
        type: String,
        required: [true, "subject is required"],
        minLength: 1,
        trim: true
    },
    frequency: {
        type: String,
        required: [true, "frequency is required"],
        enum: ["daily", "weekly", "monthly"]
    },
    repeat: {
        type: String,
        enum: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun', 'last_fri', 'first_mon', null]
    },
    time: {
        type: Date,
        required: [true, "time is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;