import styles from "./TitleSection.module.css";

export const TitleSection = ({ children }) => {
  return (
    <div>
      <h1 className={styles.title}>{children}</h1>
      <span className={styles.separador}></span>
    </div>
  );
};
