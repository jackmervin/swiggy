import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../Component/Home/locationSlice";
export const store = configureStore({
  reducer: {
    location: locationSlice,
  },
});
