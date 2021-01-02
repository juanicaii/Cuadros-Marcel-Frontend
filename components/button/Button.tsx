import styles from "./Button.module.css";

export const Button = ({ children, buttonHandler, type = "button" }) => {
  return (
    <button type={type} onClick={buttonHandler} className={styles.button}>
      {children}
    </button>
  );
};
