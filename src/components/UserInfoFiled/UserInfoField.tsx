import React from "react";
import styles from "./UserInfoField.module.scss";

interface UserInfoFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

const UserInfoField: React.FC<UserInfoFieldProps> = ({
  label,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className={styles.formGroup}>
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={disabled ? styles.disabledInput : styles.enabledInput}
        disabled={disabled}
      />
    </div>
  );
};

export default UserInfoField;
