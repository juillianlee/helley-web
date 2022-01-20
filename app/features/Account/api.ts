import axios from "axios";

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}
export interface SignInRequest {
  username: string;
  password: string;
}

export function signUp(payload: SignUpRequest) {
  return axios.post("/sign-up", payload);
}

export function signIn(payload: SignInRequest) {
  return axios.post("/login", payload);
}
