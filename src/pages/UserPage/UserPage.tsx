import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { userStore } from "../../store/UserStore";

const UserPage = observer(() => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      userStore.fetchUserById(Number(id));
    }
  }, [id]);

  const handleSave = () => {
    userStore.saveUser();
  };

  if (!userStore.user) {
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
            value={userStore.name}
            onChange={(e) => (userStore.name = e.target.value)}
            disabled={!userStore.isEditing}
          />
        </label>
      </div>
      <div>
        <label>
          Surname:
          <input
            type="text"
            value={userStore.surname}
            onChange={(e) => (userStore.surname = e.target.value)}
            disabled={!userStore.isEditing}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <label>
            <input
              type="radio"
              checked={userStore.status}
              onChange={() => (userStore.status = true)}
              disabled={!userStore.isEditing}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              checked={!userStore.status}
              onChange={() => (userStore.status = false)}
              disabled={!userStore.isEditing}
            />
            Inactive
          </label>
        </label>
      </div>
      <div>
        <label>
          Role:
          <select
            value={userStore.role}
            onChange={(e) =>
              (userStore.role = e.target.value as "User" | "Admin" | "Guest")
            }
            disabled={!userStore.isEditing}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>
        </label>
      </div>
      <div>
        {userStore.isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => userStore.cancelEdit()}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => userStore.setEditing(true)}>Edit</button>
            <button onClick={() => userStore.cancelEdit()}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
});

export default UserPage;
