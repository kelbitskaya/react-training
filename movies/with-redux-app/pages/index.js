import React from 'react';
import HomePage from "../pages/HomePage";
import { Provider } from "react-redux";
import store from "../store/store";


export default function Index() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}
