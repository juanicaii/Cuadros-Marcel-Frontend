import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import Swal from 'sweetalert2';
import Link from 'next/link';
import styles from './Product.module.css';
import cartActions from '../../redux/actions/cartActions';
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
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
interface IProduct {
  id: number;
  name: String;
  image: String;
  stock: number;
  sizes: Array<{ id: number; name: String; price: number }>;
  categories: Array<{}>;
}

export const Product = ({ id, name, image, stock, sizes, categories }: IProduct) => {
  const [cant, setCant] = useState(1);
  const [price, setPrice] = useState(sizes.length ? sizes[0].price : 1000);
  const [selected, setSelected] = useState();
  const cart = useSelector((state) => state.cart);
  const stockProducts =
    cart.products.filter((state) => state.id === id).length > 0
      ? stock - cart.products.filter((state) => state.id === id)[0].cant
      : stock;

  const dispatch = useDispatch();
  const sizesSelect = sizes.map((siz) => ({
    value: siz.id,
    label: siz.name,
    price: siz.price,
  }));

  const addStock = () => {
    if (cant < stockProducts) {
      setCant(cant + 1);
    }
  };
  const deleteStock = () => {
    if (cant !== 1 && cant !== 0) {
      setCant(cant - 1);
    }
  };

  const addCart = (product) => {
    Toast.fire({
      icon: 'success',
      title: 'Producto agregado correctamente al carrito',
    });
    if (product.cant !== 0) {
      if (cart.products.length > 0) {
        if (cart.products.some((state) => state.id === product.id)) {
          dispatch(cartActions.addMoreCant(product.id, product.cant));
          setCant(0);
        } else {
          setCant(0);
          dispatch(cartActions.addNewProduct(cart.cant + product.cant, product));
        }
      } else {
        setCant(0);
        dispatch(cartActions.addNewProduct(cart.cant + product.cant, product));
      }
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Para agregar un producto al carrito debe contener almenos una unidad',
      });
    }
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
      <div className={styles.price}> {price !== -1 ? `$${price}` : ''}</div>

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

      <Button
        disabled={stockProducts === 0 ? true : false}
        type="button"
        buttonHandler={() => {
          addCart({ id, name, image, cant, price });
        }}
      >
        Comprar
      </Button>
    </div>
  );
};
