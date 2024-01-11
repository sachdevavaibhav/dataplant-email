import express from "express";
const router = express.Router();
import { createSchedule, getSchedules, getScheduleById, deleteSchedule, updateSchedule } from "../controllers/schedule.js";

router.get("/schedule", getSchedules);

router.get("/schedule/:id", getScheduleById);

router.post("/schedule", createSchedule);

router.patch("/schedule/:id", updateSchedule);

router.delete("/schedule/:id", deleteSchedule);

export default router;