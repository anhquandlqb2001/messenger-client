import {
  createAction,
  createAsyncThunk,
  createEntityAdapter,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import conversationApis from "./apis";

export interface Message {
  id: string;
  message: string;
  userId: string;
  conversationId: string;
  createdAt: Date;
}

export interface Conversation {
  id: string;
  title: string;
  userId: string;
  updatedAt: Date;
  messages: Message[];
}

const conversationAdapter = createEntityAdapter<Conversation>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (friend) => friend.id,
  sortComparer: (a, b) =>
    a.updatedAt.toLocaleString().localeCompare(b.updatedAt.toLocaleString()),
});

const receiveMessage = createAction<Message>("RECEIVE_MESSAGE");

const messageReducer = createReducer(
  {},
  {
    [receiveMessage.type]: (
      state,
      action: PayloadAction<{ conversationId: string; message: Message }>
    ) => {},
  }
);

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
  reducers: {
    addMessage(
      state,
      action: PayloadAction<{ conversationId: string; message: Message }>
    ) {
      const updatedConversation =
        state.entities[`${action.payload.conversationId}`];
      updatedConversation?.messages.push(action.payload.message);

      conversationAdapter.updateOne(state, {
        id: action.payload.conversationId,
        changes: updatedConversation as any,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConversations.fulfilled, (state, action) => {
      if (action.payload) {
        conversationAdapter.setAll(state, action.payload);
      }
    });
  },
});

export const { addMessage } = conversationSlice.actions;

// Can create a set of memoized selectors based on the location of this entity state
export const conversationsSelectors =
  conversationAdapter.getSelectors<RootState>((state) => state.conversations);

export default conversationSlice.reducer;
