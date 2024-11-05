import { $api } from "./axios";
import { User } from "../types/user";

export const getAllUsers = (query?: string) => {
  const url = query ? `/users?q=${query}` : "/users";
  return $api.get<User[]>(url);
};
