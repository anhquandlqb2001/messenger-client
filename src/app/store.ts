import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../services/user/userSlice";
import friendReducer from "../services/friends/friendSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    friends: friendReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
