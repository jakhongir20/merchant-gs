import { LoginFormData, LoginResponse } from "@/modules/Auth/login/model/index";
import { ApiService } from "@/shared/lib/services";

export class AuthService {
  static async login(loginData: LoginFormData): Promise<LoginResponse> {
    return await ApiService.$post<LoginResponse>("/auth/login/", loginData);
    // return await ApiService.$get<LoginResponse>("/quotes/");
  }
}
