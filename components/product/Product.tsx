import styles from "./Product.module.css";
import Select from "react-select";
import { useState } from "react";
export const Product = ({ name, image }) => {
  const [stock, setStock] = useState(1);
  const options = [
    { value: "chocolate", label: "50x50" },
    { value: "strawberry", label: "70x50" },
    { value: "vanilla", label: "80x90" },
  ];

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      border: "2px solid var(--azul)",
      borderRadius: "28px",
      fontFamily: "var(--raleway-bold)",
      fontSize: "2em",
      width: "220px",
      height: "40px",
      margin: "0 auto",
      fontWeigth: "bold",
      textAlign: "center",
      color: "var(--azul)",
    }),
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      background: "transparent",
      outline: "none",

      color: "var(--azul)",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "var(--azul)",
      fontFamily: "var(--raleway-bold)",
      fontWeight: "700",
      paddingLeft: 72,
      fontSize: "1.3em",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "var(--azul)",
      fontFamily: "var(--raleway-bold)",
      fontWeight: "700",
      paddingLeft: 60,
      fontSize: "1.3em",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "var(--azul)",
    }),
  };

  const addStock = () => {
    setStock(stock + 1);
  };
  const deleteStock = () => {
    if (stock != 1) {
      setStock(stock - 1);
    }
  };
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={`/products/${image}`} alt="" />
      </div>
      <div className={styles.name}>
        <h4>{name}</h4>
      </div>
      <div className={styles.price}>$1500</div>

      <div className={styles.sizes}>
        <Select
          placeholder="Tamaños"
          styles={customStyles}
          width="200px"
          menuColor="red"
          options={options}
        />
      </div>
      <div className={styles.stock}>
        <div onClick={addStock} className={styles.more}>
          +
        </div>
        <p>{stock}</p>
        <div onClick={deleteStock} className={styles.more}>
          -
        </div>
      </div>
      <div className={styles.button}>
        <button>Comprar</button>
      </div>
    </div>
  );
};
