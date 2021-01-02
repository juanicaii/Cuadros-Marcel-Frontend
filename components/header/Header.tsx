import styles from "./Header.module.css";
import Input from "../input";
import Cart from "../cart";
import { FaBars, FaSearch } from "react-icons/fa";

export const Header = ({ openNav, closeNav }) => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.menu}`}>
        <div onClick={openNav} className="menu">
          <FaBars className={`${styles.icon} `} style={{ fontSize: 30 }} />
        </div>
        <div onClick={closeNav} className={styles.input}>
          <Input name="busqueda" placeholder="Buscar">
            <FaSearch />
          </Input>
        </div>
      </div>

      <div onClick={closeNav} className={styles.logo}>
        <img width="180px" src="/Logo.svg" />
      </div>
      <div onClick={closeNav} className={styles.cart}>
        <Cart number={1} />
      </div>
    </header>
  );
};
