import { $api } from "./axios";
import { User } from "../types/user";

export const editUser = (id: number, userData: User) => {
  return $api.put<User>(`/users/${id}`, userData);
};
