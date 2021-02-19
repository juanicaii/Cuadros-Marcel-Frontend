import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiFillPicture, AiFillContacts } from 'react-icons/ai';
import { FaShippingFast, FaUsers, FaMicroblog, FaUserCircle, FaTimesCircle } from 'react-icons/fa';
import styles from './Menu.module.css';

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
export const Menu = ({ isOpen, closeNav }: IMenu) => {
  const router = useRouter();

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
            selected={router.pathname === link.url ? true : false}
          />
        ))}
      </div>
      <div className={styles.login}>
        <FaUserCircle />
        <Link href="/iniciar-sesion">
          <h4 className={styles.link}>Iniciar Sesion</h4>
        </Link>
        <Link href="/crear-cuenta">
          <h4 className={styles.link}>Crear Cuenta</h4>
        </Link>
      </div>
    </div>
  );
};
