import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import teachersReducer from "./teachers/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "teachers",
  storage,
  whitelist: ["favourites"],
};

const persistedReducer = persistReducer(persistConfig, teachersReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "auth/login/fulfilled",
          "auth/signup/fulfilled",
          "auth/current/fulfilled",
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        ignoredPaths: ["auth.user"],
      },
    }),
});

export const persistor = persistStore(store);
