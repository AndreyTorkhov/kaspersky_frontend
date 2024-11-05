import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { userStore } from "../../store/UserStore";
import Button from "../../components/Button";
import styles from "./UserPage.module.scss";

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

  const inputClass = userStore.isEditing
    ? styles.enabledInput
    : styles.disabledInput;

  return (
    <div className={styles.userContainer}>
      <h1 className={styles.title}>User Settings</h1>
      <div className={styles.formGroup}>
        <label>Name:</label>
        <input
          type="text"
          value={userStore.name}
          onChange={(e) => (userStore.name = e.target.value)}
          className={inputClass}
          disabled={!userStore.isEditing}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Surname:</label>
        <input
          type="text"
          value={userStore.surname}
          onChange={(e) => (userStore.surname = e.target.value)}
          className={inputClass}
          disabled={!userStore.isEditing}
        />
      </div>
      <div className={`${styles.formGroup} ${styles.statusGroup}`}>
        <label>Status:</label>
        <label>
          <input
            type="radio"
            checked={userStore.status}
            onChange={() => (userStore.status = true)}
            disabled={!userStore.isEditing}
            className={inputClass}
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            checked={!userStore.status}
            onChange={() => (userStore.status = false)}
            disabled={!userStore.isEditing}
            className={inputClass}
          />
          Inactive
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>Role:</label>
        <select
          value={userStore.role}
          onChange={(e) =>
            (userStore.role = e.target.value as "User" | "Admin" | "Guest")
          }
          className={inputClass}
          disabled={!userStore.isEditing}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Guest">Guest</option>
        </select>
      </div>
      <div className={styles.buttonGroup}>
        {userStore.isEditing ? (
          <>
            <Button onClick={handleSave} label="Save" />
            <Button onClick={() => userStore.cancelEdit()} label="Cancel" />
          </>
        ) : (
          <>
            <Button onClick={() => userStore.setEditing(true)} label="Edit" />
            <Button onClick={() => userStore.cancelEdit()} label="Cancel" />
          </>
        )}
      </div>
    </div>
  );
});

export default UserPage;
