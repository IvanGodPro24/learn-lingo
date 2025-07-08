import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import teachersReducer from "./teachers/slice";
import themeReducer from "./theme/slice";

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

const themePersistConfig = {
  key: "theme",
  storage,
};

const persistedTeacherReducer = persistReducer(persistConfig, teachersReducer);

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: persistedTeacherReducer,
    theme: persistedThemeReducer,
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
