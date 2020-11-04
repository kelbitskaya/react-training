import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import App from './components/app';
import store from "./store/store";
import { Provider } from "react-redux";

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , root);
