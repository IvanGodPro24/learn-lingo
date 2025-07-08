import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTeachers } from "./operations";
import { TeacherState } from "./teachers.types";
import { Teacher } from "../auth/auth.types";

const handlePending = (state: TeacherState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: TeacherState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState: TeacherState = {
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
    addFavourite(state: TeacherState, action: PayloadAction<Teacher>) {
      state.favourites.push(action.payload);
    },

    clearFavourite(state: TeacherState, action: PayloadAction<{ id: string }>) {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
    },

    resetTeachers(state: TeacherState) {
      state.items = [];
      state.hasMore = true;
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

      .addMatcher(
        (action: PayloadAction<string>) => action.type.endsWith("pending"),
        handlePending
      )
      .addMatcher(
        (action: PayloadAction<string>) => action.type.endsWith("rejected"),
        handleRejected
      );
  },
});

export const { addFavourite, clearFavourite, resetTeachers } =
  teachersSlice.actions;

export default teachersSlice.reducer;
