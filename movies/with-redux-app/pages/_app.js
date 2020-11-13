import React from 'react';
import HomePage from "../pages/HomePage";
import { Provider } from "react-redux";
import store from "../store/store";
import '../scss/main.scss';


export default function App() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}
