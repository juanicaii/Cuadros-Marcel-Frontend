import Head from "next/head";
import styles from "../styles pages/Home.module.css";
import SliderImage from "../components/sliderImage";
import TitleSection from "../components/titleSection";
import Product from "../components/product";
import SliderProducts from "../components/sliderProducts";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio - Cuadros Marcel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SliderImage />
      <TitleSection>Productos</TitleSection>

      <SliderProducts />
    </div>
  );
}
