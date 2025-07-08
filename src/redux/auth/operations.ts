import { createAsyncThunk } from "@reduxjs/toolkit";
import { appAuth } from "../../firebase/config";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { LoginCredentials, SignUpCredentials, User } from "./auth.types";

export const login = createAsyncThunk<
  User,
  LoginCredentials,
  { rejectValue: string }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await signInWithEmailAndPassword(appAuth, email, password);

    return response.user;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk<
  User,
  SignUpCredentials,
  { rejectValue: string }
>("auth/signup", async ({ email, password, username }, { rejectWithValue }) => {
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
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk<null, void, { rejectValue: string }>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(appAuth);

      return null;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk<
  User | null,
  void,
  { rejectValue: string }
>("auth/current", async (_, { rejectWithValue }) => {
  try {
    return new Promise<User | null>((resolve) => {
      const unsubscribe = onAuthStateChanged(appAuth, (user: User | null) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
        unsubscribe();
      });
    });
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
