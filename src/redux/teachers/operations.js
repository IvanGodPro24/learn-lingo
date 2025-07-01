import {
  get,
  ref,
  query,
  limitToFirst,
  startAfter,
  orderByKey,
} from "firebase/database";
import { appDB } from "../../firebase/config.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (
    { perPage, lastKey = null, isLoadMore = false },
    { rejectWithValue }
  ) => {
    try {
      const dbRef = ref(appDB, "teachers/");

      let dbQuery;

      if (lastKey) {
        dbQuery = query(
          dbRef,
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(perPage)
        );
      } else {
        dbQuery = query(dbRef, orderByKey(), limitToFirst(perPage));
      }

      const snapshot = await get(dbQuery);

      if (!snapshot.exists()) {
        return {
          teachers: [],
          hasMore: false,
          lastKey: null,
          isLoadMore,
        };
      }

      const teachersData = snapshot.val();

      const teachers = Object.entries(teachersData).map(([id, data]) => ({
        id,
        ...data,
      }));

      const keys = Object.keys(teachersData);
      const lastTeacherKey = keys[keys.length - 1];

      const checkMoreQuery = query(
        dbRef,
        orderByKey(),
        startAfter(lastTeacherKey),
        limitToFirst(1)
      );

      const checkMoreSnapshot = await get(checkMoreQuery);
      const hasMore = checkMoreSnapshot.exists();

      return {
        teachers,
        hasMore,
        lastKey: lastTeacherKey,
        isLoadMore,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
