export interface User {
  id: string;
  name: string;
  surname: string;
  status: boolean;
  role: "User" | "Admin" | "Guest";
}
