import { useEffect, useState } from "react";

import { getAllUsers } from "../../api/getAllUsers";
import { User } from "../../types/user";

import Search from "../Search";
import UserItem from "../UserItem";

import styles from "./UserList.module.scss";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllUsers(search)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, [search]);

  return (
    <div className={styles.userListContainer}>
      <Search search={search} setSearch={setSearch} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
