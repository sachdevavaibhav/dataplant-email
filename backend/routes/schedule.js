import express from "express";
const router = express.Router();
import { createSchedule, getSchedules } from "../controllers/schedule.js";

router.get("/schedule", getSchedules);

router.get("/schedule/:id", async (req, res) => {

});

router.post("/schedule", createSchedule);

router.patch("/schedule/:id", async (req, res) => {

});

router.delete("/schedule/:id", async (req, res) => {

});

export default router;