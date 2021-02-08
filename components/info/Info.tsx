import TitleSection from "../titleSection";
import {
  FaEnvelope,
  FaHashtag,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import styles from "../../styles pages/Contact.module.css";
export default function Informacion(props) {
  return (
    <div className={styles.infoDiv}>
      <div className={styles.title}>
        <TitleSection>Informacion</TitleSection>
      </div>
      <div className={`${styles.info} `}>
        <h4 className={``}>
          {" "}
          <FaEnvelope /> Email
        </h4>
        <p>ventas@cuadrosmarcel.com</p>
        <h4 className={``}>
          {" "}
          <FaHashtag />
          Redes Sociales
        </h4>
        <div>
          <FaFacebook />
          <span>@cuadrosmarcel</span>
        </div>{" "}
        <div>
          <FaInstagram />
          <span>@cuadrosmarcel</span>
        </div>{" "}
        <div>
          <FaPinterest />
          <span>@cuadrosmarcel</span>
        </div>
      </div>
    </div>
  );
}
