import { MutationFunction, useMutation } from "@tanstack/react-query";
import {
  AuthService,
  LoginFormData,
  LoginMutationOptions,
  LoginResponse,
} from "@/modules/Auth/login/model/index";

export function useLogin(options?: LoginMutationOptions) {
  const mutationFn: MutationFunction<LoginResponse, LoginFormData> = async (
    loginData: LoginFormData,
  ) => await AuthService.login(loginData);

  return useMutation<LoginResponse, unknown, LoginFormData>({
    mutationKey: ["auth", "login-user"],
    mutationFn,
    ...options,
  });
}
