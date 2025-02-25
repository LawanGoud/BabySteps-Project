export function generateAvailableSlots(workingHours, appointments) {
  return ["09:00", "10:30", "14:00", "16:00"]; // Dummy data
}

export function isSlotUnavailable(appointments, requestedDate, duration) {
  return appointments.some((appointment) => {
    const appointmentEndTime = new Date(
      appointment.date.getTime() + appointment.duration * 60000
    );
    const requestedEndTime = new Date(
      new Date(requestedDate).getTime() + duration * 60000
    );
    return (
      (new Date(requestedDate) >= appointment.date &&
        new Date(requestedDate) < appointmentEndTime) ||
      (requestedEndTime > appointment.date &&
        requestedEndTime <= appointmentEndTime)
    );
  });
}
