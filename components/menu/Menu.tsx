import Router, { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { AiFillHome, AiFillPicture, AiFillContacts } from 'react-icons/ai';
import { FaShippingFast, FaUsers, FaMicroblog, FaUserCircle, FaTimesCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import styles from './Menu.module.css';
import authActions from '../../redux/actions/authActions';

const links = [
  { name: 'Inicio', icon: () => <AiFillHome />, url: '/' },
  { name: 'Productos', icon: () => <AiFillPicture />, url: '/productos/1' },
  {
    name: 'Listos para Enviar',
    icon: () => <FaShippingFast />,
    url: '/envio-listo',
  },
  { name: 'Quienes Somos', icon: () => <FaUsers />, url: '/nosotros' },
  { name: 'Blog', icon: () => <FaMicroblog />, url: '/blog' },
  { name: 'Contacto', icon: () => <AiFillContacts />, url: '/contacto' },
  {
    name: 'Localiza tu Envio',
    icon: () => <FaShippingFast />,
    url: '/buscar-envio',
  },
];

interface ILinks {
  name: string;
  Icon: any;
  selected: boolean;
  url: string;
  closeNav: () => {};
}
export const Links = ({ name, Icon, selected, url, closeNav }: ILinks) => (
  <>
    <Link
      href={url === '/productos/1' ? '/productos/[id]' : url}
      as={url === '/productos/1' ? url : ''}
    >
      <a onClick={closeNav}>
        <div className={`${styles.link} ${selected ? styles.selected : ''} `}>
          <Icon />
          <h4>{name}</h4>
        </div>
      </a>
    </Link>
  </>
);

interface IMenu {
  isOpen: boolean;
  closeNav: () => void;
}
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const Menu = ({ isOpen, closeNav }: IMenu) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const [cookies, removeCookie] = useCookies(['access_token']);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logoutUser());
    Toast.fire({
      icon: 'error',
      title: 'Hasta Pronto',
    });
    const cookieKey = Object.keys(cookies)[0];
    removeCookie(cookieKey, '');
  };

  return (
    <div className={`${styles.menu} menu ${!isOpen ? styles.hide : ''}`}>
      <div className={styles.close}>
        <FaTimesCircle onClick={closeNav} />
      </div>
      <div className={styles.nav}>
        {links.map((link, index) => (
          <Links
            key={index}
            name={link.name}
            Icon={link.icon}
            url={link.url}
            closeNav={closeNav}
            selected={router.pathname === link.url}
          />
        ))}
      </div>
      {!user.isUserLogged ? (
        <div className={styles.login}>
          <FaUserCircle />
          <Link href="/iniciar-sesion">
            <h4 className={styles.link}>Iniciar Sesion</h4>
          </Link>
          <Link href="/crear-cuenta">
            <h4 className={styles.link}>Crear Cuenta</h4>
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <h4 className={styles.name}>{user.firstName}</h4>
            <h4 onClick={logout} className={styles.cerrar}>Cerrar Sesion</h4>
        </div>
      )}
    </div>
  );
};
