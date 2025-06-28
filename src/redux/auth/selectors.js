export const selectUser = (state) => state.auth.user;

export const selectIsInitialized = (state) => state.auth.isInitialized;

export const selectisLoggedIn = (state) => !!state.auth.user;
