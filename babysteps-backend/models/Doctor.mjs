import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  workingHours: { start: String, end: String },
  specialization: String,
});

export default mongoose.model("Doctor", doctorSchema);
