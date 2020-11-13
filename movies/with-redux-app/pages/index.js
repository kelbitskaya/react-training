import React from 'react';
import HomePage from "../pages/HomePage";
import axios from "axios";
import {fetchMovies} from "../store/actions/actions";

function Index() {
  return (
      <HomePage/>
  );
}

Index.getInitialProps = async ({store}) => {
  const response = await axios.get('http://localhost:4000/movies');
  store.dispatch(fetchMovies());
  return {movies: response.data};
};

export default Index;
