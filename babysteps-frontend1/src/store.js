import { configureStore } from "@reduxjs/toolkit";
import appointmentsReducer from "./features/appointments/appointments";
import doctorsReducer from "./features/doctors/doctors";

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    doctors: doctorsReducer,
  },
});

export default store;
