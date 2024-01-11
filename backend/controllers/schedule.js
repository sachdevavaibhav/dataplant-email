import Schedule from "../models/schedule.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateResponse } from "../utils/generateResponse.js";
import { FREQUENCY, WEEKLY_REPEAT, MONTHLY_REPEAT } from "../utils/constants.js";



export const getSchedules = asyncHandler(async (req, res) => {
    const {search} = req.query;
    let schedules;
    if(search){
        schedules = await Schedule.find({title: {$regex: search, $options: "i"}});
    }
    else {
        schedules = await Schedule.find({});
    };
    const response = generateResponse(200, schedules, "schedules fetched successfully", true);
    res.status(200).json(response);
});

export const getScheduleById = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const schedule = await Schedule.findById(id);
    const response = generateResponse(200, schedule, "schedule fetched successfully", true);
    res.status(200).json(response);
});

export const createSchedule = asyncHandler(async (req, res) => {
    const {
        title,
        desc,
        subject,
        frequency,
        repeat,
        time
    } = req.body;

    if (!title || !desc || !subject || !frequency || !time) {
        res.status(400);
        throw new Error("title, desc, subject, frequency and time fields are required");
    };

    // remove any whitespace from the beginning and end of the title, desc and subject
    title.trim();
    desc.trim();
    subject.trim();

    if ((frequency === "weekly" || frequency === "monthly") && !repeat) {
        res.status(400);
        throw new Error("repeat field is required");
    };

    if (!FREQUENCY.includes(frequency)) {
        res.status(400);
        throw new Error("invalid frequency value");
    };

    if (frequency === "weekly" && !WEEKLY_REPEAT.includes(repeat)) {
        res.status(400);
        throw new Error("invalid repeat value");
    }
    else if (frequency === "monthly" && !MONTHLY_REPEAT.includes(repeat)) {
        res.status(400);
        throw new Error("invalid repeat value");
    };

    if (frequency === "daily" && repeat) {
        res.status(400);
        throw new Error("repeat field is not required for daily frequency");
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

    const response = generateResponse(200, newSchedule, "schedule created successfully", true);
    res.status(200).json(response);
});