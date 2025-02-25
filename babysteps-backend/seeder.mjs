import dotenv from "dotenv";
import connectDB from "./config/db.mjs";
import Doctor from "./models/Doctor.mjs";

dotenv.config();
connectDB();

const seedDoctors = async () => {
  await Doctor.deleteMany(); // Clear existing data
  await Doctor.insertMany([
    {
      name: "Dr. Smith",
      workingHours: { start: "09:00", end: "17:00" },
      specialization: "Gynecologist",
    },
    {
      name: "Dr. Adams",
      workingHours: { start: "10:00", end: "18:00" },
      specialization: "Pediatrician",
    },
  ]);
  console.log("✅ Sample doctors inserted!");
  process.exit();
};

seedDoctors();
