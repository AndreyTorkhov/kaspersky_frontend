import { useEffect, useState } from "react";
import { getAllUsers } from "../../api/getAllUsers";
import { User } from "../../types/user";

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
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.surname} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
