import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LoginFormProperties } from "../../pages/LandingPage/components/LoginForm";
import { User } from "../friends/apis";
import userAPI from "./apis";

export interface FormError {
  message: string;
  statusCode: string;
}

interface UserState {
  user: User | null;
  error: FormError | null | undefined;
}

const initialState: UserState = {
  user: null,
  error: null,
};

export const login = createAsyncThunk<
  string,
  LoginFormProperties,
  { rejectValue: FormError }
>("user/login", async (user, { rejectWithValue }) => {
  try {
    const { data } = await userAPI.login<LoginFormProperties>(user);
    return data.access_token;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchProfile = createAsyncThunk<User, any, { rejectValue: any }>(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userAPI.fetchUser();
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        action.payload && localStorage.setItem("token", action.payload);
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = {
            message: "Something wrong",
            statusCode: "401",
          };
        }
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = {
            message: "Something wrong",
            statusCode: "401",
          };
        }
      });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
