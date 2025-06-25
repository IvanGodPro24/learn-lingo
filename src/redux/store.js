import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "auth/login/fulfilled",
          "auth/signup/fulfilled",
          "auth/current/fulfilled",
        ],
        ignoredPaths: ["auth.user"],
      },
    }),
});
