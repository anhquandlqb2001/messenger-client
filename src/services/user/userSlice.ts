import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LoginFormProperties } from "../../pages/LandingPage/components/LoginForm";
import userAPI from "./userAPI";

export interface FormError {
  message: string;
  statusCode: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}


interface UserState {
  user: User;
  error: FormError | null | undefined;
}

const initialState: UserState = {
  user: {
    email: "",
    first_name: "",
    last_name: "",
    id: "",
  },
  error: null,
};

export const loginUser = createAsyncThunk<
  string,
  LoginFormProperties,
  { rejectValue: FormError }
>("user/loginUser", async (user, { rejectWithValue }) => {
  try {
    const response = await userAPI.login<LoginFormProperties>(user)

    return response.data.access_token;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

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
      });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
