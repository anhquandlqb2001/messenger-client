import axios from "axios";
import { User } from "./userSlice";

export interface LoginUserResponse {
  access_token: string;
  success: boolean;
}

export interface UserProfileResponse {
  user: User;
  success: boolean;
}

const BASE_URL = "http://localhost:5000";

class UserAPI {
  async login<T>(user: T) {
    return await axios.post<LoginUserResponse>(BASE_URL + "/auth/login", user);
  }

  async fetchUser() {
    return await axios.get<UserProfileResponse>(`${BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }
}

export default new UserAPI();
