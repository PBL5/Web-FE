import React from 'react';
import Head from 'next/head';
import { wrapper } from 'src/store';
import Navbar from 'component/common/navbar/Navbar';
import 'public/custom.css';

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Face Recognition</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(_App);
