import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Button onClick={goHome} label="Go Back to Home" />
    </div>
  );
};

export default NotFoundPage;
