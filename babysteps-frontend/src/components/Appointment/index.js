import { useState, useEffect } from "react";
import "./index.css";

const dummyDoctors = [
  { _id: "1", name: "Dr. John Doe" },
  { _id: "2", name: "Dr. Jane Smith" },
  { _id: "3", name: "Dr. Emily Johnson" },
  { _id: "4", name: "Dr. Michael Brown" },
  { _id: "5", name: "Dr. Sarah Wilson" },
];

const dummySlots = {
  1: ["09:00 AM", "10:00 AM", "11:00 AM"],
  2: ["01:00 PM", "02:00 PM", "03:00 PM"],
  3: ["10:30 AM", "12:30 PM", "02:30 PM"],
  4: ["09:30 AM", "11:30 AM", "01:30 PM"],
  5: ["08:00 AM", "10:00 AM", "12:00 PM"],
};

function Appointment({ onAppointmentBooked }) {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [patientName, setPatientName] = useState("");
  const [message, setMessage] = useState("");

  // Load dummy doctors
  useEffect(() => {
    setDoctors(dummyDoctors);
  }, []);

  // Load dummy slots
  useEffect(() => {
    if (selectedDoctor && date) {
      setAvailableSlots(dummySlots[selectedDoctor] || []);
    }
  }, [selectedDoctor, date]);

  // Handle appointment booking
  const handleBooking = async (e) => {
    e.preventDefault();

    if (!selectedDoctor || !date || !selectedSlot || !patientName) {
      setMessage("⚠️ Please fill all fields before booking.");
      return;
    }

    try {
      const newAppointment = {
        doctorId: selectedDoctor,
        date,
        time: selectedSlot,
        patientName,
      };
      setMessage("✅ Appointment booked successfully!");
      setDate("");
      setSelectedSlot("");
      setPatientName("");
      onAppointmentBooked(newAppointment);
    } catch (err) {
      setMessage("❌ Failed to book appointment. Try again.");
    }
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleBooking}>
        <label>Select Doctor:</label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">-- Choose a Doctor --</option>
          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>
              {doctor.name}
            </option>
          ))}
        </select>

        <label>Select Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Select Time Slot:</label>
        <select
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
        >
          <option value="">-- Choose a Time Slot --</option>
          {availableSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <label>Your Name:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit" className="book-btn">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;
