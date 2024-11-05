import { $api } from "./axios";
import { User } from "../types/user";

export const getUserById = (id: number) => $api.get<User>(`/users/${id}`);
