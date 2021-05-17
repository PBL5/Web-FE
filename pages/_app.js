import React from 'react';
import App, { Container } from 'next/app';
import {wrapper} from 'src/store';
import Navbar from 'component/common/navbar/Navbar';
import 'public/custom.css';

const _App = ({Component, pageProps}) => {
    return (
      <Container>
          <Navbar />
          <Component {...pageProps}/>
      </Container>
    );
}

export default wrapper.withRedux(_App);
