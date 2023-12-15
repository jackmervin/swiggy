import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  location: "",
};
const LocationSlice = createSlice({
  name: "locarion",
  initialState,
  reducers: {
    findlocation: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default LocationSlice.reducer;
export const { findlocation } = LocationSlice.actions;
