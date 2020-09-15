import React, { useState } from 'react';
import ErrorBoundary from './auxiliary/ErrorBoundary';
import Header from './header/Header';
import Footer from './footer/Footer';
import MovieList from './movieList/MovieList';
import Filters from './filter/Filters';
import Constants from './constants';

export default function App() {
  const [moviesList, updateMovieList] = useState(Constants.MOVIES);

  const updateData = (movies) => {
    updateMovieList(movies);
  };

  return (
    <ErrorBoundary>
      <Header />
      <div className="content">
        <Filters movies={moviesList} updateMovies={updateData} />
        <MovieList movies={moviesList} />
      </div>
      <Footer />
    </ErrorBoundary>
  );
}
