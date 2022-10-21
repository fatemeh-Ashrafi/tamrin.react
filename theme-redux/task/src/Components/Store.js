
import { configureStore } from "@reduxjs/toolkit";
import FontSizeSlice from "../Features/FontSizeSlice";

export const store = configureStore({
  reducer: {
    fontSize: FontSizeSlice,
  },
});