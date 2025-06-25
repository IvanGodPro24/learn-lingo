import { createAsyncThunk } from "@reduxjs/toolkit";
import { appAuth } from "../../firebase/config";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await signInWithEmailAndPassword(
        appAuth,
        email,
        password
      );

      return response.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        appAuth,
        email,
        password
      );

      await updateProfile(response.user, {
        displayName: username,
      });

      return response.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(appAuth);

      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(appAuth, (user) => {
          if (user) {
            resolve(user);
          } else {
            resolve(null);
          }
          unsubscribe();
        });
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
