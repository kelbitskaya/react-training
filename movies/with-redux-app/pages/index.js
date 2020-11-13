import React from 'react';
import HomePage from "../pages/HomePage";
import axios from "axios";


function Index() {
  return (
      <HomePage/>
  );
}

Index.getInitialProps = async () => {
  const response = await axios.get('http://localhost:4000/movies');
  return {movies: response.data};
};

export default Index;
