import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Home from "./pages/Home";
import AppointmentManagement from "./pages/AppointmentManagement";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BabySteps
          </Typography>
          <Button color="inherit" onClick={() => setActiveTab("home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => setActiveTab("appointments")}>
            Appointments
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        {activeTab === "home" ? <Home /> : <AppointmentManagement />}
      </Container>
    </>
  );
};

export default App;
