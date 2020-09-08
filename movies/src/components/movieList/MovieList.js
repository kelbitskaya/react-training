import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import ResultCount from '../resultCount/ResultCount';

export default function MoviesList(props) {
  const { movies } = props;
  const setMovieGenre = (movie) => {
    return movie.genre.join(', ');
  };
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
