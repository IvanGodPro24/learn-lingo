import { createSlice } from "@reduxjs/toolkit";
import { current, login, logout, signUp } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  user: null,
  error: null,
  loading: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })

      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user = null;
      })

      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })

      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export default authSlice.reducer;
