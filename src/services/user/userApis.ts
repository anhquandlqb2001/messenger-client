import axios from "axios";
import { User } from "../friends/friendApis";

export interface LoginUserResponse {
  access_token: string;
  success: boolean;
}

export interface UserProfileResponse {
  user: User;
  success: boolean;
}
class UserAPI {
  async login<T>(user: T) {
    return await axios.post<LoginUserResponse>("/auth/login", user);
  }

  async fetchUser() {
    return await axios.get<UserProfileResponse>(`/user`);
  }
}

export default new UserAPI();
