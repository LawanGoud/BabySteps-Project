import Doctor from "../models/Doctor.mjs";

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};
