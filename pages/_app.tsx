import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles pages/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import { wrapper } from '../redux/store';
import authActions from '../redux/actions/authActions';

const MyApp: AppProps = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies] = useCookies(['access_token']);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies.access_token) {
      try{
        dispatch(authActions.getUserData({ access_token: cookies.access_token }));
      }catch (err) {
        console.log(err.response)
      }
    }
  });
  const openNav = (): void => {
    setIsOpen(true);
  };
  const closeNav = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/swiper/swiper-bundle.css" />
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
};

export default wrapper.withRedux(MyApp);
