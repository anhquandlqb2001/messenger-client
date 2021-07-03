import axios from "axios";
import { Conversation } from "./slices";

class ConversationApi {
  async conversations() {
    return await axios.get<{ conversations: Conversation[] }>("/conversations");
  }
}

export default new ConversationApi();
