import express from "express";
const router = express.Router();
import { createSchedule, getSchedules, getScheduleById, deleteSchedule } from "../controllers/schedule.js";

router.get("/schedule", getSchedules);

router.get("/schedule/:id", getScheduleById);

router.post("/schedule", createSchedule);

router.patch("/schedule/:id", async (req, res) => {

});

router.delete("/schedule/:id", deleteSchedule);

export default router;