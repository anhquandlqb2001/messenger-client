import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import friendApis, { User } from "./friendApis";

const friendsAdapter = createEntityAdapter<User>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (friend) => friend.id,
  sortComparer: (a, b) =>
    a.updatedAt.toLocaleString().localeCompare(b.updatedAt.toLocaleString()),
});

export const fetchFriendList = createAsyncThunk<User[]>(
  "friends/all",
  async () => {
    const response = await friendApis.friends();
    return response.data;
  }
);

const friendSlice = createSlice({
  name: "friends",
  initialState: friendsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFriendList.fulfilled, (state, action) => {
      if (action.payload) {
        friendsAdapter.setAll(state, action.payload);
      }
    });
  },
});

// Can create a set of memoized selectors based on the location of this entity state
export const friendsSelectors = friendsAdapter.getSelectors<RootState>(
  (state) => state.friends
);

export default friendSlice.reducer;
