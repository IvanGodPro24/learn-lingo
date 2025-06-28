import { createSlice } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",

  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export default teachersSlice.reducer;
