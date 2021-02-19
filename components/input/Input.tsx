import styles from './Input.module.css';

interface IInputProps {
  name: string;
  placeholder: string;
  children?: string;
  type?: string;
  error?: {
    message?: string;
  };
  register: Object;
}

export const Input = ({ name, placeholder, children, type, error, register }: IInputProps) => (
  <div className={`${error ? styles.inputError : styles.input}`}>
    <input ref={register} type={type || 'text'} name={name} placeholder={placeholder} />
    <div className={styles.inputIcon}>{children}</div>
    <p className={styles.error}>{error?.message}</p>
  </div>
);
