import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type signup = {
  id: string;
  password: string;
  phone: string;
  roll: string;
  email: string;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const signupAxios = createAsyncThunk(
  "SignUp",
  async (newUserData: signup, { rejectWithValue }) => {
    try {
      const response = await axios.post("auth/postSignUp", newUserData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);
