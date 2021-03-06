import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './footer.module.css';
import Input from '../input';

interface ITitleFooter {
  children: String;
}
export const TitleFooter = ({ children }: ITitleFooter) => (
  <h1 className={styles.title}>{children}</h1>
);

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <TitleFooter>Contacto</TitleFooter>
      <p className={styles.desc}>ventas@cuadrosmarcel.com</p>
      <p className={styles.desc}>+5491130148833</p>
    </div>
    <div className={styles.payments}>
      <TitleFooter>Metodos de Pago</TitleFooter>
      <img width="300px" src="/payments.svg" alt="payments" />
    </div>
    <div className={styles.social}>
      <TitleFooter>Redes Sociales</TitleFooter>
      <div className={styles.icons}>
        <FaFacebook />
        <FaInstagram />
      </div>
    </div>
    <div className={styles.news}>
      <TitleFooter>Suscribite al Newsletter</TitleFooter>
      <Input name="news" placeholder="Correo Electronico" />
    </div>
  </footer>
);
