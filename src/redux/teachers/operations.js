import { get, ref } from "firebase/database";
import { appDB } from "../../firebase/config.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(appDB, "teachers/");
      const snapshot = await get(dbRef);

      if (!snapshot.exists()) {
        return [];
      }

      const teachersData = snapshot.val();

      return Object.entries(teachersData).map(([id, data]) => ({
        id,
        ...data,
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
