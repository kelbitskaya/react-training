import React from 'react'
import {wrapper} from '../store/store';
import store from '../store/store';
import '../scss/main.scss';


// class MyApp extends App {
//   static async getInitialProps({Component, ctx}) {
//     return {
//       pageProps: {
//         ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
//       }
//     };
//   }
//
//   render() {
//     const {Component, pageProps} = this.props;
//     return (
//       <Component {...pageProps} />
//     );
//   }
//
// }
//
// export default wrapper.withRedux(MyApp);

import { Provider } from 'react-redux';

const App = ({ Component, pageProps }) => {
    return (
      <Component {...pageProps} />
    );
  };

App.getInitialProps = async (appContext) => {
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return { ...pageProps }
};

export default wrapper.withRedux(App);
