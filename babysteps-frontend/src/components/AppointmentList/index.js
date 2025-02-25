import "./index.css";

const AppointmentList = ({ appointments }) => {
  return (
    <div className="appointment-list-container">
      <h2>Appointments List</h2>
      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <ul className="appointment-list">
          {appointments.map((appointment, index) => (
            <li key={index} className="appointment-item">
              <strong>{appointment.patientName}</strong> has an appointment with{" "}
              <strong>Doctor {appointment.doctorId}</strong> on{" "}
              <strong>{appointment.date}</strong> at{" "}
              <strong>{appointment.time}</strong>.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
