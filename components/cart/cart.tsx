import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styles from './cart.module.css';


export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <FaShoppingBag className={styles.icon} />
      <div className={styles.cartNumber}>{cart.cant}</div>
    </div>
  );
};
