import axios from "axios";
import { Conversation, Message } from "./slices";

class ConversationApi {
  async conversations() {
    return await axios.get<{ conversations: Conversation[] }>("/conversations");
  }

  async messages(conversationId: string) {
    return await axios.get<{ messages: Message[] }>("/messages/conversation/" + conversationId);
  }
}

export default new ConversationApi();
