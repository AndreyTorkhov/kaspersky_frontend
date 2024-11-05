import { makeAutoObservable } from "mobx";
import { User } from "../types/user";
import { getUserById } from "../api/getUser";
import { editUser } from "../api/editUser";

class UserStore {
  user: User | null = null;
  isEditing: boolean = false;
  name: string = "";
  surname: string = "";
  status: boolean = false;
  role: "User" | "Admin" | "Guest" = "User";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
    this.name = user.name;
    this.surname = user.surname;
    this.status = user.status;
    this.role = user.role;
  }

  setEditing(editing: boolean) {
    this.isEditing = editing;
  }

  async fetchUserById(id: number) {
    const response = await getUserById(id);
    this.setUser(response.data);
  }

  async saveUser() {
    if (this.user) {
      const updatedUser: User = {
        ...this.user,
        name: this.name,
        surname: this.surname,
        status: this.status,
        role: this.role,
      };
      await editUser(Number(this.user.id), updatedUser);
      this.setEditing(false);
      this.setUser(updatedUser);
    }
  }

  cancelEdit() {
    if (this.user) {
      this.setUser(this.user);
      this.setEditing(false);
    }
  }
}

export const userStore = new UserStore();
