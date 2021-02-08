import styles from "./Button.module.css";

interface IButton {
  children: string;
  buttonHandler?: () => {} | null;
  type?: string;
}
export const Button = ({ children, buttonHandler, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={buttonHandler}
      className={styles.button}
    >
      {children}
    </button>
  );
};
