import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkTheme: false,
};
export const ThemeSlice = createSlice({
  name: "theme",
  initialState:{value:initialState},
  reducers: {
    toggleTheme: (state) => {
      
      state.value.darkTheme = !state.value.darkTheme;
      console.log(state.value.darkTheme);
    },
  },
});
export default ThemeSlice.reducer;
export const { toggleTheme } = ThemeSlice.actions;