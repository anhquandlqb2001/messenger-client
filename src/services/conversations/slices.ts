import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import conversationApis from "./apis";

export interface Conversation {
  id: string;
  title: string;
  userId: string;
  updatedAt: Date;
}

const conversationAdapter = createEntityAdapter<Conversation>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (friend) => friend.id,
  sortComparer: (a, b) =>
    a.updatedAt.toLocaleString().localeCompare(b.updatedAt.toLocaleString()),
});

export const fetchConversations = createAsyncThunk<Conversation[]>(
  "conversations/all",
  async () => {
    const response = await conversationApis.conversations();
    return response.data.conversations;
  }
);

const conversationSlice = createSlice({
  name: "conversations",
  initialState: conversationAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConversations.fulfilled, (state, action) => {
      if (action.payload) {
        conversationAdapter.setAll(state, action.payload);
      }
    });
  },
});

// Can create a set of memoized selectors based on the location of this entity state
export const conversationsSelectors =
  conversationAdapter.getSelectors<RootState>((state) => state.conversations);

export default conversationSlice.reducer;
