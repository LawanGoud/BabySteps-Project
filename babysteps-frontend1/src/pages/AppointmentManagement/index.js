import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      date: "2025-03-01",
      time: "10:00 AM",
      type: "Consultation",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2025-03-02",
      time: "02:00 PM",
      type: "Follow-up",
    },
  ]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenEdit(true);
  };

  const handleCancel = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const handleChange = (e) => {
    setSelectedAppointment({
      ...selectedAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === selectedAppointment.id
          ? selectedAppointment
          : appointment
      )
    );
    setOpenEdit(false);
  };

  return (
    <>
      <Container>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {appointments.map((appointment) => (
            <Grid item key={appointment.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 3,
                  p: 2,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {appointment.patientName}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>
                    <strong>Date:</strong> {appointment.date}
                  </Typography>
                  <Typography>
                    <strong>Time:</strong> {appointment.time}
                  </Typography>
                  <Typography>
                    <strong>Type:</strong> {appointment.type}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(appointment)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleCancel(appointment.id)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Edit Appointment Dialog */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit Appointment</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Patient Name"
            name="patientName"
            value={selectedAppointment?.patientName || ""}
            onChange={handleChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Date"
            name="date"
            type="date"
            value={selectedAppointment?.date || ""}
            onChange={handleChange}
            margin="dense"
          />
          <TextField
            fullWidth
            label="Time"
            name="time"
            select
            value={selectedAppointment?.time || ""}
            onChange={handleChange}
            margin="dense"
          >
            <MenuItem value="09:00 AM">09:00 AM</MenuItem>
            <MenuItem value="10:00 AM">10:00 AM</MenuItem>
            <MenuItem value="02:00 PM">02:00 PM</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Appointment Type"
            name="type"
            select
            value={selectedAppointment?.type || ""}
            onChange={handleChange}
            margin="dense"
          >
            <MenuItem value="Consultation">Consultation</MenuItem>
            <MenuItem value="Follow-up">Follow-up</MenuItem>
            <MenuItem value="Screening">Screening</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppointmentManagement;
