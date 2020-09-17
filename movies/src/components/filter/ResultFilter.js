import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants';

export default function ResultFilter(props) {
  const genres = Constants.GENRE;
  const { updateMovies } = props;
  const [activeGenre, setActiveGenre] = useState(genres[0]);

  const sortMovieList = (movieGenre) => {
    const movieList = Constants.MOVIES;
    if (movieGenre.id === genres[0].id) {
      updateMovies(movieList);
      setActiveGenre(genres[0]);
    } else {
      const currentGenre = movieGenre.title;

      const sortedMovieList = movieList.filter((movie) => movie.genre.some(
        (genre) => genre.toLowerCase === activeGenre,
      ));

      const activeGenreIndex = genres.findIndex((el) => el.title === currentGenre);
      setActiveGenre(genres[activeGenreIndex]);

      updateMovies(sortedMovieList);
    }
  };

  const filterMovies = (genre) => {
    sortMovieList(genre);
  };

  return (
    <ul className="genre-filter">
      { Constants.GENRE.map((genre) => (
        <li key={genre.id}>
          <button
            type="button"
            className={genre.title === activeGenre.title ? 'genre-filter__item active' : 'genre-filter__item'}
            key={genre.id}
            onClick={() => filterMovies(genre)}
          >
            {genre.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

ResultFilter.propTypes = {
  updateMovies: PropTypes.func.isRequired,
};
