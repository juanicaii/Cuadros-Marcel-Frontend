import { FaShoppingBag } from "react-icons/fa";
import styles from "./cart.module.css";
export const Cart = ({ number }) => {
  return (
    <div>
      <FaShoppingBag className={styles.icon} />
      <div className={styles.cartNumber}>{number}</div>
    </div>
  );
};
