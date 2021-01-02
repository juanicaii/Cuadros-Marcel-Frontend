import "../styles pages/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = (e) => {
    setIsOpen(false);
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/swiper/swiper-bundle.css"
        />
      </Head>
      <Menu closeNav={closeNav} isOpen={isOpen} />
      <div className="body">
        <Header closeNav={closeNav} openNav={openNav} />

        <div onClick={closeNav}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
