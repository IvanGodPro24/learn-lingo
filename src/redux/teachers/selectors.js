export const selectTeachers = (state) => state.teachers.items;

export const selectFavourites = (state) => state.teachers.favourites;

export const selectIsLoading = (state) => state.teachers.isLoading;

export const selectError = (state) => state.teachers.error;
