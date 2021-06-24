import axios from "axios";

interface LoginUserResponse {
  access_token: string;
  success: boolean;
}

class UserAPI {
  async login<T>(user: T) {
    return await axios.post<LoginUserResponse>("http://localhost:5000/auth/login", user);
  }
}

export default new UserAPI