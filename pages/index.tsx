import Head from 'next/head';
import styles from '../styles pages/Home.module.css';
import SliderImage from '../components/sliderImage';
import TitleSection from '../components/titleSection';
import SliderProducts from '../components/sliderProducts';
import * as constants from '../utils/constants';

interface IHome {
  products: {
    results: Array<{
      id: Number;
      name: String;
      img: String;
      stock: Number;
      sizeId: Array<{}>;
      categoryId: Array<{}>;
    }>;
  };
}
export default function Home({ products }: IHome) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio - Cuadros Marcel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SliderImage />
      <TitleSection>Productos</TitleSection>

      {products ? <SliderProducts products={products} /> : 'Loading'}
    </div>
  );
}

export async function getServerSideProps() {
  const productsFetch = await fetch(`${constants.SERVER_PATH}/api/products/`);
  const products = await productsFetch.json();

  return { props: { products } };
}
