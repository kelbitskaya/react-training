import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import ResultCount from '../resultCount/ResultCount';
import {fetchMovies} from '../../store/actions/actions';

const setMovieGenre = (movie) => {
  if(Array.isArray(movie.genres)) {
    return movie.genres.join(', ');
  }
  return movie.genres
};
const setMovieYear = (movie) => movie.release_date && +movie.release_date.substr(0, 4);

const MoviesList = (props) => {
  const { selectMovie } = props;
  const movies = useSelector(state => state.movies.data);
  const isMovieListLoaded = movies && movies.length;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  },[]);

  return (
    <>
      { isMovieListLoaded ?
        <div className="movie-list">
          <ResultCount
            count={movies.length}
          />
          { movies.length ? movies.map((movie) => (
            <MovieCard
              title={movie.title}
              genre={setMovieGenre(movie)}
              year={setMovieYear(movie)}
              releaseDate={movie.release_date}
              src={movie.poster_path}
              url={movie.poster_path}
              id={movie.id}
              key={movie.id}
              overview={movie.overview}
              runtime={movie.runtime}
              selectMovie={selectMovie}
            />
          ))
          :
            null
          }
        </div>
      :
        <p>Movies is loading</p>
      }
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    length: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    map: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired,
    movies: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
  }).isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MoviesList;
