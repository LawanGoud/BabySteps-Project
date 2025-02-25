import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    photo:
      "https://res.cloudinary.com/db3erodfw/image/upload/v1740492498/pn7e1cdaqsrzirwrplx5.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Dermatologist",
    photo:
      "https://res.cloudinary.com/db3erodfw/image/upload/v1740492498/rimxpcsvni6zb3ibqsdx.jpg",
  },
  {
    id: 3,
    name: "Dr. Robert Brown",
    specialty: "Pediatrician",
    photo:
      "https://res.cloudinary.com/db3erodfw/image/upload/v1740492498/yk78mjkvi3upqkgqgbkp.jpg",
  },
  {
    id: 4,
    name: "Dr. Emily White",
    specialty: "Neurologist",
    photo:
      "https://res.cloudinary.com/db3erodfw/image/upload/v1740492498/olsrblrgzr8ftwhwdbyq.jpg",
  },
  {
    id: 5,
    name: "Dr. Michael Green",
    specialty: "Orthopedic Surgeon",
    photo:
      "https://res.cloudinary.com/db3erodfw/image/upload/v1740492498/rcxpofrgi1twtzzwdfov.jpg",
  },
];

const availableSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", type: "", notes: "" });

  const handleSelectDoctor = () => {
    setOpen(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setBookingOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const appointmentData = {
      date: selectedDate.format("YYYY-MM-DD"),
      time: selectedSlot,
      patientName: formData.name,
      appointmentType: formData.type,
      notes: formData.notes,
    };

    console.log("Booking appointment:", appointmentData);
    setBookingOpen(false);
  };

  return (
    <>
      <Container>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {doctors.map((doctor) => (
            <Grid item key={doctor.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ maxWidth: 345, boxShadow: 3, cursor: "pointer" }}
                onClick={handleSelectDoctor}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={doctor.photo}
                  alt={doctor.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.specialty}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Calendar Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Select an Appointment Date</DialogTitle>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              disablePast
              minDate={dayjs()}
              maxDate={dayjs().add(7, "day")}
              onChange={handleDateSelect}
            />
          </LocalizationProvider>
          {selectedDate && (
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {availableSlots.map((slot) => (
                <Grid item key={slot}>
                  <Button
                    variant="outlined"
                    onClick={() => handleSlotSelect(slot)}
                  >
                    {slot}
                  </Button>
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking Form Dialog */}
      <Dialog open={bookingOpen} onClose={() => setBookingOpen(false)}>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Patient Name"
            name="name"
            margin="dense"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            select
            label="Appointment Type"
            name="type"
            margin="dense"
            onChange={handleInputChange}
          >
            <MenuItem value="Consultation">Consultation</MenuItem>
            <MenuItem value="Follow-up">Follow-up</MenuItem>
            <MenuItem value="Screening">Screening</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Notes"
            name="notes"
            multiline
            rows={3}
            margin="dense"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBookingOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Home;
