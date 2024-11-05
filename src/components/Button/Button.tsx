import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
