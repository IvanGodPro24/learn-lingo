import { get, ref, query, orderByKey } from "firebase/database";
import { appDB } from "../../firebase/config.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async ({ perPage, page = 1, filters = {} }, { rejectWithValue }) => {
    try {
      const dbRef = ref(appDB, "teachers/");

      const snapshot = await get(query(dbRef, orderByKey()));

      if (!snapshot.exists()) {
        return {
          teachers: [],
          hasMore: false,
          page,
        };
      }

      const teachersData = snapshot.val();

      const teachersAll = Object.entries(teachersData).map(([id, data]) => ({
        id,
        ...data,
      }));

      const filteredTeachers = teachersAll.filter((teacher) => {
        const matchesName =
          !filters.name ||
          teacher.name.toLowerCase().includes(filters.name.toLowerCase());

        const matchesLanguage =
          !filters.language || teacher.languages?.includes(filters.language);

        const matchesLevel =
          !filters.level || teacher.levels?.includes(filters.level);

        const matchesRating =
          !filters.rating || teacher.rating >= filters.rating;

        const matchesPrice =
          !filters.price ||
          (teacher.price_per_hour >= filters.price[0] &&
            teacher.price_per_hour <= filters.price[1]);

        return (
          matchesName &&
          matchesLanguage &&
          matchesLevel &&
          matchesRating &&
          matchesPrice
        );
      });

      const startIndex = (page - 1) * perPage;
      const paginatedTeachers = filteredTeachers.slice(
        startIndex,
        startIndex + perPage
      );

      const hasMore = filteredTeachers.length > page * perPage;

      return {
        teachers: paginatedTeachers,
        hasMore,
        page,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
