import styles from './Button.module.css';

interface IButton {
  children: string;

  buttonHandler?: () => {} | null;
  type?: string;
}
export const Button = ({ children, buttonHandler, type }: IButton) => (
  <button type={!type ? 'button' : type} onClick={buttonHandler} className={styles.button}>
    {children}
  </button>
);
