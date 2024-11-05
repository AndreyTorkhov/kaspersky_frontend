import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../api/getUser";
import { editUser } from "../../api/editUser";
import { User } from "../../types/user";

function UserPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [status, setStatus] = useState(false);
  const [role, setRole] = useState<"User" | "Admin" | "Guest">("User"); // Явное указание типа

  useEffect(() => {
    if (id) {
      getUserById(Number(id))
        .then((response) => {
          const userData = response.data;
          setUser(userData);
          setName(userData.name);
          setSurname(userData.surname);
          setStatus(userData.status);
          setRole(userData.role);
        })
        .catch((error) => {
          console.error("Failed to fetch user:", error);
        });
    }
  }, [id]);

  const handleSave = () => {
    if (user) {
      const updatedUser: User = { ...user, name, surname, status, role };
      editUser(Number(user.id), updatedUser)
        .then(() => {
          setUser(updatedUser);
          setIsEditing(false);
        })
        .catch((error) => {
          console.error("Failed to save user:", error);
        });
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Settings</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
          />
        </label>
      </div>
      <div>
        <label>
          Surname:
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            disabled={!isEditing}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <label>
            <input
              type="radio"
              value="Active"
              checked={status === true}
              onChange={() => setStatus(true)}
              disabled={!isEditing}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              value="Inactive"
              checked={status === false}
              onChange={() => setStatus(false)}
              disabled={!isEditing}
            />
            Inactive
          </label>
        </label>
      </div>
      <div>
        <label>
          Role:
          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "User" | "Admin" | "Guest")
            }
            disabled={!isEditing}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>
        </label>
      </div>
      <div>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default UserPage;
