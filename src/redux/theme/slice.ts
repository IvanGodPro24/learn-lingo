import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeInitState } from "./theme.types";

const initialState: ThemeInitState = {
  theme: "theme-yellow",
};

const themeSlice = createSlice({
  name: "theme",

  initialState,

  reducers: {
    setTheme: (state: ThemeInitState, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
