import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getAllUsers";
import { User } from "../../types/user";
import styles from "./UserList.module.scss";
import { NavLink } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, []);

  return (
    <div className={styles.userList}>
      <h1>User List</h1>
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
            <tr key={user.id}>
              <td className={styles.userName}>
                <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
              </td>

              <td className={styles.userStatus}>
                {user.status ? "Active" : "Inactive"}
              </td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
