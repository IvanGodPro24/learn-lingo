import { RootState } from "../store.types";

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsInitialized = (state: RootState) =>
  state.auth.isInitialized;

export const selectisLoggedIn = (state: RootState) => !!state.auth.user;
