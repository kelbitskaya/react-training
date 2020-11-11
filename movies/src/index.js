/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './assets/scss/main.scss';
import App from './components/app';
import store from "./store/store";

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , root);
