import { $api } from "./axios";
import { User } from "../types/user";

export const getAllUsers = () => $api.get<User[]>("/users");
