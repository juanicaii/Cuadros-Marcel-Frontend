import styles from "./Menu.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AiFillHome,
  AiFillPicture,
  AiFillContacts,
  AiFillCloseCircle,
} from "react-icons/ai";
import {
  FaShippingFast,
  FaUsers,
  FaMicroblog,
  FaUserCircle,
  FaTimesCircle,
} from "react-icons/fa";

const links = [
  { name: "Inicio", icon: () => <AiFillHome />, url: "/" },
  { name: "Productos", icon: () => <AiFillPicture />, url: "/productos/1" },
  { name: "Listos para Enviar", icon: () => <FaShippingFast />, url: "/" },
  { name: "Quienes Somos", icon: () => <FaUsers />, url: "/" },
  { name: "Blog", icon: () => <FaMicroblog />, url: "/" },
  { name: "Contacto", icon: () => <AiFillContacts />, url: "/" },
  { name: "Localiza tu Envio", icon: () => <FaShippingFast />, url: "/" },
];

export const Links = ({ name, Icon, selected, url }) => {
  return (
    <>
      <Link
        href={url === "/productos/1" ? "/productos/[id]" : url}
        as={url === "/productos/1" ? url : ""}
      >
        <a>
          <div className={`${styles.link} ${selected ? styles.selected : ""} `}>
            <Icon />
            <h4>{name}</h4>
          </div>
        </a>
      </Link>
    </>
  );
};
export const Menu = ({ isOpen, closeNav }) => {
  const router = useRouter();

  return (
    <div className={`${styles.menu} menu ${!isOpen ? styles.hide : ""}`}>
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
            selected={router.pathname === link.url ? true : false}
          />
        ))}
      </div>
      <div className={styles.login}>
        <FaUserCircle />
        <h4>Iniciar Sesion</h4>
        <h4>Crear Cuenta</h4>
      </div>
    </div>
  );
};
