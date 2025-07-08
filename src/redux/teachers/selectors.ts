import { RootState } from "../store.types";

export const selectTeachers = (state: RootState) => state.teachers.items;

export const selectFavourites = (state: RootState) => state.teachers.favourites;

export const selectIsLoading = (state: RootState) => state.teachers.isLoading;

export const selectError = (state: RootState) => state.teachers.error;

export const selectHasMore = (state: RootState) => state.teachers.hasMore;
