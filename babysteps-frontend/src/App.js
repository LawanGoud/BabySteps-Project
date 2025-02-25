import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import AppointmentList from "./components/AppointmentList";
import "./App.css";

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const handleAppointmentBooked = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/appointment"
          element={
            <Appointment onAppointmentBooked={handleAppointmentBooked} />
          }
        />
        <Route
          path="/appointments-list"
          element={<AppointmentList appointments={appointments} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
