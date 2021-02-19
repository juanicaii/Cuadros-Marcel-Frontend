import styles from './Product.module.css';
import Select from 'react-select';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../button';

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    border: '2px solid var(--azul)',
    borderRadius: '28px',
    fontFamily: 'var(--raleway-bold)',
    fontSize: '2em',
    width: '220px',
    height: '40px',
    margin: '0 auto',
    fontWeigth: 'bold',
    textAlign: 'center',
    color: 'var(--azul)',
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    background: 'transparent',
    outline: 'none',

    color: 'var(--azul)',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'var(--azul)',
    fontFamily: 'var(--raleway-bold)',
    fontWeight: '700',
    paddingLeft: 72,
    fontSize: '1.3em',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: 'var(--azul)',
    fontFamily: 'var(--raleway-bold)',
    fontWeight: '700',
    paddingLeft: 60,
    fontSize: '1.3em',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--azul)',
  }),
};

interface IProduct {
  name: String;
  image: String;
  stock: Number;
  sizes: Array<{ id: Number; name: String; price: Number }>;
  categories: Array<{}>;
}
export const Product = ({ name, image, stock, sizes, categories }: IProduct) => {
  const [cant, setCant] = useState(1);
  const [price, setPrice] = useState(1500);
  const [selected, setSelected] = useState();
  const sizesSelect = sizes.map((siz) => ({
    value: siz.id,
    label: siz.name,
    price: siz.price,
  }));

  const addStock = () => {
    if (cant < stock) {
      setCant(cant + 1);
    }
  };
  const deleteStock = () => {
    if (cant != 1) {
      setCant(cant - 1);
    }
  };

  const addCart = () => {
    alert('hola');
  };

  return (
    <div className={styles.product}>
      <Link href="/producto/1">
        <div>
          <div className={styles.image}>
            <img src={`${image}`} alt="" />
          </div>

          <div className={styles.name}>
            <h4>{name}</h4>
          </div>
        </div>
      </Link>
      <div className={styles.price}>${price}</div>

      <div className={styles.sizes}>
        <Select
          placeholder="Tamaños"
          styles={customStyles}
          width="200px"
          menuColor="red"
          onChange={(e) => {
            setPrice(e.price);
            setSelected(e.value);
          }}
          options={sizesSelect}
        />
      </div>
      <div className={styles.stock}>
        <div role="button" onClick={deleteStock} className={styles.more}>
          -
        </div>
        <p>{cant}</p>
        <div onClick={addStock} className={styles.more}>
          +
        </div>
      </div>
      <Button type="button" buttonHandler={addCart}>
        Comprar
      </Button>
    </div>
  );
};
