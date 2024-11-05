import React from "react";
import { NavLink } from "react-router-dom";
import { User } from "../../types/user";
import styles from "./UserItem.module.scss";

interface CardItemProps {
  user: User;
}

const UserItem: React.FC<CardItemProps> = ({ user }) => {
  return (
    <tr key={user.id}>
      <td className={styles.userName}>
        <NavLink
          to={`/users/${user.id}`}
        >{`${user.name} ${user.surname}`}</NavLink>
      </td>
      <td className={styles.userStatus}>
        {user.status ? "Active" : "Inactive"}
      </td>
      <td>{user.role}</td>
    </tr>
  );
};

export default UserItem;
