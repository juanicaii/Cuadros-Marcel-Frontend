import styles from "./Input.module.css";

export const Input = ({ name, placeholder, children }) => {
  return (
    <div className={`${styles.input}`}>
      <input name={name} placeholder={placeholder} />
      <div className={styles.inputIcon}>{children}</div>
    </div>
  );
};
