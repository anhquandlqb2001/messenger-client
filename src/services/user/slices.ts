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

export const loginUser = createAsyncThunk<
  string,
  LoginFormProperties,
  { rejectValue: FormError }
>("user/loginUser", async (user, { rejectWithValue }) => {
  try {
    const { data } = await userAPI.login<LoginFormProperties>(user);
    return data.access_token;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const userProfile = createAsyncThunk<User, any, { rejectValue: any }>(
  "user/userProfile",
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
      .addCase(loginUser.fulfilled, (state, action) => {
        action.payload && localStorage.setItem("token", action.payload);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = {
            message: "Something wrong",
            statusCode: "401",
          };
        }
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(userProfile.rejected, (state, action) => {
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
