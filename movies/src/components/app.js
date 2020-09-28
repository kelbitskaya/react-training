import React, { useState } from 'react';
import ErrorBoundary from './auxiliary/ErrorBoundary';
import Header from './header/Header';
import Footer from './footer/Footer';
import MovieList from './movieList/MovieList';
import Filters from './filter/Filters';
import Constants from './constants';

export default function App() {
  const [moviesList, updateMovieList] = useState(Constants.MOVIES);
  const [isMovieSelected, selectedMovieId] = useState(0);

  const updateData = (movies) => {
    updateMovieList(movies);
  };

  const  selectMovieById = ()=> {
    return Constants.MOVIES.find(x => x.id === isMovieSelected);
  };

  const selectMovie = (id) => {
    selectedMovieId(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ErrorBoundary>
      <Header  selectedMovie={selectMovieById()} isMovieSelected={isMovieSelected} goHomePage={selectMovie}/>
      <div className="content">
        <Filters movies={moviesList} updateMovies={updateData} />
        <MovieList movies={moviesList} selectMovie={selectMovie}/>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}
