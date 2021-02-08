import styles from "../styles pages/Contact.module.css";
import Head from "next/head";
import Info from "../components/info";
import Contact from "../components/contact/Contact";
export default function ContactView() {
  return (
    <div className={styles.contacto}>
      <Head>
        <title> Contacto | Cuadros Marcel</title>
      </Head>
      <Contact />
      <Info />
    </div>
  );
}
