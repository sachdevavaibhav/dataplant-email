import Schedule from "../models/schedule.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateResponse } from "../utils/generateResponse.js";
import { FREQUENCY, WEEKLY_REPEAT, MONTHLY_REPEAT } from "../utils/constants.js";

const validateSchedule = (schedule) => {
    const {
        title,
        desc,
        subject,
        frequency,
        repeat,
        time
    } = schedule;

    if (!title || !desc || !subject || !frequency || !time) {
        return {
            isValid: false,
            message: "title, desc, subject, frequency and time fields are required"
        }
    };

    if ((frequency === "weekly" || frequency === "monthly") && !repeat) {
        return {
            isValid: false,
            message: "repeat field is required"
        }
    };

    if (!FREQUENCY.includes(frequency)) {
        return {
            isValid: false,
            message: "invalid frequency value"
        }
    };

    if (frequency === "weekly" && !WEEKLY_REPEAT.includes(repeat)) {
        return {
            isValid: false,
            message: "invalid repeat value"
        }
    }
    else if (frequency === "monthly" && !MONTHLY_REPEAT.includes(repeat)) {
        return {
            isValid: false,
            message: "invalid repeat value"
        }
    };

    if (frequency === "daily" && repeat) {
        return {
            isValid: false,
            message: "repeat field is not required for daily frequency"
        }
    };

    return {
        isValid: true,
        message: ""
    }
};

export const getSchedules = asyncHandler(async (req, res) => {
    const {search} = req.query;
    let schedules;
    if(search){
        schedules = await Schedule.find({title: {$regex: search, $options: "i"}});
    }
    else {
        schedules = await Schedule.find({});
    };
    if (!schedules) {
        res.status(404);
        throw new Error("schedules not found");
    }
    const response = generateResponse(200, schedules, "schedules fetched successfully", true);
    res.status(200).json(response);
});

export const getScheduleById = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const schedule = await Schedule.findById(id);
    if (!schedule) {
        res.status(404);
        throw new Error("schedule not found");
    }
    const response = generateResponse(200, schedule, "schedule fetched successfully", true);
    res.status(200).json(response);
});

export const createSchedule = asyncHandler(async (req, res) => {
    let {
        title,
        desc,
        subject,
        frequency,
        repeat=null,
        time
    } = req.body;

    // remove any whitespace from the beginning and end of the title, desc and subject
    title = title.trim();
    desc = desc.trim();
    subject = subject.trim();

    const validation = validateSchedule({title, desc, subject, frequency, repeat, time});

    if (!validation.isValid) {
        res.status(400);
        throw new Error(validation.message);
    };

    const newSchedule = new Schedule({
        title: title,
        desc: desc,
        subject: subject,
        frequency: frequency,
        repeat: repeat,
        time: time
    })

    const savedSchedule = await newSchedule.save();
    if (!savedSchedule) {
        res.status(500);
        throw new Error("schedule not saved");
    }

    const response = generateResponse(200, savedSchedule, "schedule created successfully", true);
    res.status(201).json(response);
});

export const updateSchedule = asyncHandler(async (req, res) => {
    const {id} = req.params;
    let {
        title,
        desc,
        subject,
        frequency,
        repeat=null,
        time
    } = req.body;

    // remove any whitespace from the beginning and end of the title, desc and subject
    title = title.trim();
    desc = desc.trim();
    subject = subject.trim();

    const validation = validateSchedule({title, desc, subject, frequency, repeat, time});

    if (!validation.isValid) {
        res.status(400);
        throw new Error(validation.message);
    };

    const updatedSchedule = await Schedule.findByIdAndUpdate(id, {
        title: title,
        desc: desc,
        subject: subject,
        frequency: frequency,
        repeat: repeat,
        time: time
    }, {new: true, runValidators: true});

    if (!updatedSchedule) {
        res.status(500);
        throw new Error("schedule not updated");
    }

    const response = generateResponse(200, updatedSchedule, "schedule updated successfully", true);
    res.status(200).json(response);

});

export const deleteSchedule = asyncHandler(async (req, res) => {
    const {id} = req.params;
    const schedule = await Schedule.findByIdAndDelete(id);
    if (!schedule) {
        res.status(404);
        throw new Error("schedule not found");
    }
    const response = generateResponse(200, schedule, "schedule deleted successfully", true);
    res.status(200).json(response);
});