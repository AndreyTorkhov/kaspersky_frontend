import React from "react";
import Button from "../../components/Button";
import styles from "./UserActions.module.scss";

interface UserActionsProps {
  isEditing: boolean;
  onSave: () => void;
  onCancel: () => void;
  onEdit: () => void;
  onBack: () => void;
}

const UserActions: React.FC<UserActionsProps> = ({
  isEditing,
  onSave,
  onCancel,
  onEdit,
  onBack,
}) => {
  return (
    <div className={styles.buttonGroup}>
      {isEditing ? (
        <>
          <Button onClick={onSave} label="Save" />
          <Button onClick={onCancel} label="Cancel" />
        </>
      ) : (
        <>
          <Button onClick={onEdit} label="Edit" />
          <Button onClick={onCancel} label="Cancel" />
          <Button onClick={onBack} label="Back" />
        </>
      )}
    </div>
  );
};

export default UserActions;
