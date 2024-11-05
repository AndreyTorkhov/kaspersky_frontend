import { $api } from "./axios";
import { User } from "../types/user";

export const createUser = (userData: User) => {
  return $api.post<User>("/users", userData);
};
