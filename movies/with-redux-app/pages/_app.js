// import React from 'react';
// import HomePage from "../pages/HomePage";
// import { Provider } from "react-redux";
// import store from "../store/store";
// import '../scss/main.scss';
//
//
// export default function App() {
//   return (
//     <Provider store={store}>
//       <HomePage/>
//     </Provider>
//   );
// }

import React from 'react'
import App from 'next/app';
import {wrapper} from '../store/store';


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
