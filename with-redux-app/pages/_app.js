import React from 'react'
import App from 'next/app';
import {wrapper} from '../store/store';
import '../scss/main.scss';


class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      }
    };
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <Component {...pageProps} />
    );
  }

}

export default wrapper.withRedux(MyApp);
