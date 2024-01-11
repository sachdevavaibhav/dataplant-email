import express from "express";
const router = express.Router();
import { createSchedule, getSchedules, getScheduleById, deleteSchedule, updateSchedule } from "../controllers/schedule.js";

router.get("/", getSchedules);

router.get("/:id", getScheduleById);

router.post("/", createSchedule);

router.patch("/:id", updateSchedule);

router.delete("/:id", deleteSchedule);

export default router;