import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import ResultCount from '../resultCount/ResultCount';

const setMovieGenre = (movie) => movie.genre.join(', ');

const mapStateToProps = (state) => {
  return {movies: state}
};

const MoviesList = (props) => {
  const { movies, selectMovie } = props;
  return (
    <div className="movie-list">
      <ResultCount
        count={movies.length}
      />
      { movies.map((movie) => (
        <MovieCard
          title={movie.title}
          genre={setMovieGenre(movie)}
          year={movie.year}
          releaseDate={movie.releaseDate}
          src={movie.src}
          url={movie.url}
          id={movie.id}
          key={movie.id}
          overview={movie.overview}
          runtime={movie.runtime}
          selectMovie={selectMovie}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MoviesList);
