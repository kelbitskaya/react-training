import React, {useState, useCallback} from 'react';
import axios from "axios";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MovieList from '../components/movieList/MovieList';
import Filters from '../components/filter/Filters';
import Constants from '../components/constants';

const HomePage = () => {
  const [moviesList, updateMovieList] = useState(Constants.MOVIES);
  const [isMovieSelected, selectedMovieId] = useState(0);

  const updateData = (movies) => {
    updateMovieList(movies);
  };

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
    <div className="wrapper">
      <Header selectedMovie={selectMovieById()} isMovieSelected={isMovieSelected} goHomePage={selectMovie}/>
      <div className="content">
        <Filters movies={moviesList} updateMovies={updateData}/>
        <MovieList selectMovie={selectMovie}/>
      </div>
      <Footer/>
    </div>
  )
};


HomePage.getInitialProps = async () => {
  const response = await axios.get('http://localhost:4000/movies', {
    params: {
      limit: 9,
      sortOrder: 'asc',
      sortBy: 'release_date',
      filter: '',
      search: '',
      searchBy: 'title'
    }
  });
  return {movies: response.data}
};


export default HomePage;
