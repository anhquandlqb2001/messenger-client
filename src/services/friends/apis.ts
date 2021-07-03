import axios from "axios";

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  phone?: string;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  isReported: boolean;
  isBlocked: boolean;
  preferences?: string;
}

class FriendAPI {
  async friends() {
    return await axios.get<User[]>("/friends");
  }
}

export default new FriendAPI();
