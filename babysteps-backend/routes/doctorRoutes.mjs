import express from "express";
import Doctor from "../models/Doctor.mjs";
import Appointment from "../models/Appointment.mjs";
import { generateAvailableSlots } from "../utils/slotUtils.mjs";

const router = express.Router();

// Get all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// ✅ Get available time slots for a doctor on a specific date
router.get("/:id/slots", async (req, res) => {
  const { id } = req.params;
  const { date } = req.query; // Format: YYYY-MM-DD

  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });

    // Fetch existing appointments
    const appointments = await Appointment.find({ doctorId: id, date });

    // Compute available slots
    const availableSlots = generateAvailableSlots(
      doctor.workingHours,
      appointments
    );
    res.json(availableSlots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
