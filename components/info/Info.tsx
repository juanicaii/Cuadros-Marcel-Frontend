import { FaEnvelope, FaHashtag, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import TitleSection from '../titleSection';
import styles from '../../styles pages/Contact.module.css';

export default function Informacion() {
  return (
    <div className={styles.infoDiv}>
      <div className={styles.title}>
        <TitleSection>Informacion</TitleSection>
      </div>
      <div className={`${styles.info} `}>
        <h4>
          <FaEnvelope />
          Email
        </h4>
        <p>ventas@cuadrosmarcel.com</p>
        <h4>
          <FaHashtag />
          Redes Sociales
        </h4>
        <div>
          <FaFacebook />
          <span>@cuadrosmarcel</span>
        </div>
        <div>
          <FaInstagram />
          <span>@cuadrosmarcel</span>
        </div>
        <div>
          <FaPinterest />
          <span>@cuadrosmarcel</span>
        </div>
      </div>
    </div>
  );
}
