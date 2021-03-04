import React from 'react';
import styles from './Button.module.css';

enum ButtonTypes {
  'button',
  'submit',
  'reset',
  undefined,
}
interface IButton {
  children: string;
  disabled?:boolean
  buttonHandler?: () => void | null;
  type: "submit" | "button";
}
export const Button = ({ children, buttonHandler, type,disabled }: IButton) => (
  <button disabled={disabled} onClick={buttonHandler} className={styles.button} type="submit">
    {children}
  </button>
);
