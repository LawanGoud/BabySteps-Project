import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  date: Date,
  duration: Number,
  appointmentType: String,
  patientName: String,
  notes: String,
});

export default mongoose.model("Appointment", appointmentSchema);
