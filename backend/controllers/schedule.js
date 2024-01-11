import Schedule from "../models/schedule.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateResponse } from "../utils/generateResponse.js";

export async function getAllSchedules(req, res) {

}

export const createSchedule = asyncHandler(async (req, res) => {
    const {
        title,
        desc,
        subject,
        frequency,
        repeat,
        time
    } = req.body;

    if (!title || !desc || !subject || !frequency || !repeat || !time) {
        res.status(400);
        throw new Error("all fields are required...");
    };

    const newSchedule = new Schedule({
        title: title,
        desc: desc,
        subject: subject,
        frequency: frequency,
        repeat: repeat,
        time: time
    })

    await newSchedule.save();

    const response = generateResponse(200, newSchedule, "Schedule created successfully", true);
    res.status(200).json(response);
})