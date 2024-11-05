import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { userStore } from "../../store/UserStore";
import UserInfoField from "../../components/UserInfoFiled";
import UserStatus from "../../components/UserStatus";
import UserActions from "../../components/UserActions";
import styles from "./UserPage.module.scss";

const UserPage = observer(() => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      userStore.fetchUserById(Number(id));
    }
  }, [id]);

  const handleSave = () => userStore.saveUser();
  const handleBack = () => navigate(-1);

  if (!userStore.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.userContainer}>
      <h1 className={styles.title}>User Settings</h1>

      <UserInfoField
        label="Name"
        value={userStore.name}
        onChange={(value) => (userStore.name = value)}
        disabled={!userStore.isEditing}
      />

      <UserInfoField
        label="Surname"
        value={userStore.surname}
        onChange={(value) => (userStore.surname = value)}
        disabled={!userStore.isEditing}
      />

      <UserStatus
        status={userStore.status}
        setStatus={(value) => (userStore.status = value)}
        disabled={!userStore.isEditing}
      />

      <div className={styles.formGroup}>
        <label>Role:</label>
        <select
          value={userStore.role}
          onChange={(e) =>
            (userStore.role = e.target.value as "User" | "Admin" | "Guest")
          }
          className={
            userStore.isEditing ? styles.enabledInput : styles.disabledInput
          }
          disabled={!userStore.isEditing}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Guest">Guest</option>
        </select>
      </div>

      <UserActions
        isEditing={userStore.isEditing}
        onSave={handleSave}
        onCancel={() => userStore.cancelEdit()}
        onEdit={() => userStore.setEditing(true)}
        onBack={handleBack}
      />
    </div>
  );
});

export default UserPage;
