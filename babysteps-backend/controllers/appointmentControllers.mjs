import Appointment from "../models/Appointment.mjs";

import {
  generateAvailableSlots,
  isSlotUnavailable,
} from "../utils/slotUtils.mjs";

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
};

export const createAppointment = async (req, res) => {
  const { doctorId, date, duration, appointmentType, patientName, notes } =
    req.body;

  const existingAppointments = await Appointment.find({
    doctorId,
    date: new Date(date),
  });
  if (isSlotUnavailable(existingAppointments, date, duration)) {
    return res.status(400).json({ error: "Time slot unavailable" });
  }

  const appointment = new Appointment({
    doctorId,
    date,
    duration,
    appointmentType,
    patientName,
    notes,
  });
  await appointment.save();
  res.status(201).json(appointment);
};
