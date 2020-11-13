import React from 'react';
import HomePage from "../pages/HomePage";
import { Provider } from "react-redux";
import store from "../store/store";
import axios from "axios";


function Index() {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}

Index.getInitialProps = async () => {
  const response = await axios.get('http://localhost:4000/movies')
  return { response }
};

export default Index;
