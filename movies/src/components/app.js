import React, {useState, useCallback} from 'react';
import {Provider} from 'react-redux';
import ErrorBoundary from './auxiliary/ErrorBoundary';
import store from '../store/store';
import Header from './header/Header';
import Footer from './footer/Footer';
import MovieList from './movieList/MovieList';
import Filters from './filter/Filters';
import Constants from './constants';

export default function App() {
  const [moviesList, updateMovieList] = useState(Constants.MOVIES);
  const [isMovieSelected, selectedMovieId] = useState(0);

  const updateData = useCallback((movies) => {
    updateMovieList(movies);
  }, []);

  const selectMovieById = () => {
    return Constants.MOVIES.find(x => x.id === isMovieSelected);
  };

  const selectMovie = useCallback((id) => {
    selectedMovieId(id);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [selectedMovieId]);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Header selectedMovie={selectMovieById()} isMovieSelected={isMovieSelected} goHomePage={selectMovie}/>
        <div className="content">
          <Filters movies={moviesList} updateMovies={updateData}/>
          <MovieList selectMovie={selectMovie}/>
        </div>
        <Footer/>
      </Provider>
    </ErrorBoundary>
  );
}
