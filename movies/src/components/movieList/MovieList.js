import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import ResultCount from '../resultCount/ResultCount';
import { fetchMovies } from '../../store/actions/actions'

const setMovieGenre = (movie) => movie.genres.join(', ');
const setMovieYear = (movie) => +movie.release_date.substr(0, 4);

const mapStateToProps = (state) => {
  return {movies: state}
};

const MoviesList = (props) => {
  const { movies, selectMovie } = props;


  useEffect(() => {
    props.dispatch(fetchMovies());
  },[]);

  return (
    <>
      { !movies.loading ?
        <div className="movie-list">
          <ResultCount
            count={movies.movies.data.length}
          />
          { movies.movies.data.map((movie) => (
            <MovieCard
              title={movie.title}
              genre={setMovieGenre(movie)}
              year={setMovieYear(movie)}
              releaseDate={movie.releaseDate}
              src={movie.poster_path}
              url={movie.url}
              id={movie.id}
              key={movie.id}
              overview={movie.overview}
              runtime={movie.runtime}
              selectMovie={selectMovie}
            />
          ))}
        </div>
      :
        <ResultCount count={0}/>
      }
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    length: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    map: PropTypes.func.isRequired,
    movies: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
  }).isRequired,
  selectMovie: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MoviesList);
