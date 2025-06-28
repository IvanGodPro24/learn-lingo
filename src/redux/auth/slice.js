import { createSlice } from "@reduxjs/toolkit";
import { current, login, logout, signUp } from "./operations";

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const initialState = {
  user: null,
  error: null,
  isInitialized: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload;
      })

      .addCase(signUp.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.error = null;
        state.user = null;
      })

      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.isInitialized = true;
      })

      .addCase(current.rejected, (state, action) => {
        state.error = action.payload;
        state.isInitialized = true;
      })

      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export default authSlice.reducer;
