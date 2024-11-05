import { $api } from "./axios";
import { User } from "../types/user";

export const getAllUsers = (page = 1, limit = 10, searchQuery = "") => {
  const query = `/users?page=${page}&limit=${limit}${
    searchQuery ? `&q=${searchQuery}` : ""
  }`;

  return $api.get<{
    data: User[];
    total: number;
    page: number;
    totalPages: number;
  }>(query);
};
