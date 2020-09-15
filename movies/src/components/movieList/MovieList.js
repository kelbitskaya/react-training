import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import ResultCount from '../resultCount/ResultCount';

export default function MoviesList(props) {
  const { movies } = props;
  const setMovieGenre = (movie) => movie.genre.join(', ');
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
        />
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};
