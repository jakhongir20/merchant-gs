import { MutationFunction, useMutation } from "@tanstack/react-query";
import {
  AuthService,
  LoginFormData,
  LoginMutationOptions,
  LoginResponse,
} from "@/modules/Auth/model/index";

export function useLogin(options?: LoginMutationOptions) {
  const mutationFn: MutationFunction<LoginResponse, LoginFormData> = async (
    loginData: LoginFormData,
  ) => await AuthService.login(loginData);

  return useMutation<LoginResponse, unknown, LoginFormData>({
    mutationKey: ["auth", "login"],
    mutationFn,
    ...options,
  });
}
