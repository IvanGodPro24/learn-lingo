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
  favourites: [],
  isLoading: false,
  error: null,
  hasMore: true,
  page: 1,
};

const teachersSlice = createSlice({
  name: "teachers",

  initialState,

  reducers: {
    addFavourite(state, action) {
      state.favourites.push(action.payload);
    },

    clearFavourite(state, action) {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
    },

    resetTeachers(state) {
      state.items = [];
      state.hasMore = true;
      state.lastKey = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        const { teachers, hasMore, page } = action.payload;

        if (page > 1) {
          state.items = [...state.items, ...teachers];
        } else {
          state.items = teachers;
        }

        state.hasMore = hasMore;
        state.page = page;
      })

      .addMatcher((action) => action.type.endsWith("pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export const { addFavourite, clearFavourite, resetTeachers } =
  teachersSlice.actions;

export default teachersSlice.reducer;
