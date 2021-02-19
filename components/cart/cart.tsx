import { FaShoppingBag } from 'react-icons/fa';
import styles from './cart.module.css';

interface ICart {
  number: Number;
}
export const Cart = ({ number }: ICart) => (
  <div>
    <FaShoppingBag className={styles.icon} />
    <div className={styles.cartNumber}>{number}</div>
  </div>
);
