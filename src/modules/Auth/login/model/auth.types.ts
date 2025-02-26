import { UseMutationOptions } from "@tanstack/react-query";

export interface LoginResponse {
  token: string;
  id: number;
}

export interface LoginFormData {
  username: string;
  password: string;
  remember: boolean;
}

export type LoginMutationOptions = UseMutationOptions<
  LoginResponse,
  unknown,
  LoginFormData
>;
