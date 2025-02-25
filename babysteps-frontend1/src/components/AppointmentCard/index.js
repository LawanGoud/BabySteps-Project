import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const AppointmentCard = ({ appointment, onEdit, onCancel }) => {
  return (
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
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEdit(appointment)}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => onCancel(appointment.id)}
        >
          Cancel
        </Button>
      </Box>
    </Card>
  );
};

export default AppointmentCard;
