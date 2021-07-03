import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "../services/user/slices";
import friendReducer from "../services/friends/slices";
import conversationReducer from "../services/conversations/slices";
import createSocketMiddleware from "../middlewares/socketMiddleware";

export const store = configureStore({
  reducer: {
    user: userReducer,
    friends: friendReducer,
    conversations: conversationReducer,
  },
  middleware: getDefaultMiddleware().concat(createSocketMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
