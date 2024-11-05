import React from "react";
import styles from "./UserStatus.module.scss";

interface UserStatusProps {
  status: boolean;
  setStatus: (value: boolean) => void;
  disabled: boolean;
}

const UserStatus: React.FC<UserStatusProps> = ({
  status,
  setStatus,
  disabled,
}) => {
  return (
    <div className={`${styles.formGroup} ${styles.statusGroup}`}>
      <label>Status:</label>
      <label>
        <input
          type="radio"
          checked={status}
          onChange={() => setStatus(true)}
          disabled={disabled}
          className={disabled ? styles.disabledInput : styles.enabledInput}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          checked={!status}
          onChange={() => setStatus(false)}
          disabled={disabled}
          className={disabled ? styles.disabledInput : styles.enabledInput}
        />
        Inactive
      </label>
    </div>
  );
};

export default UserStatus;
