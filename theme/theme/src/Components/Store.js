
import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../Features/ThemeSlice";

export const Store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
});