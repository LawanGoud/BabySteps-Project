// src/components/DoctorCard.js

import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

const DoctorCard = ({ doctor, onSelectDoctor }) => {
  return (
    <Card
      sx={{ maxWidth: 345, boxShadow: 3, cursor: "pointer" }}
      onClick={() => onSelectDoctor(doctor)}
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
  );
};

export default DoctorCard;
