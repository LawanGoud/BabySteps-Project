// routes/appointmentRoutes.js
import express from "express";
import {
  getAppointments,
  createAppointment,
} from "../controllers/appointmentControllers.mjs";

const router = express.Router();
router.get("/", getAppointments);
router.post("/", createAppointment);

export default router;
