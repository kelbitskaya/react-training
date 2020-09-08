import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieMenu from '../movieMenu/MovieMenu';
import MovieDeletePopup from '../movieDeletePopup/MovieDeletePopup'
import MovieEditPopup from '../movieEditPopup/MovieEditPopup'

export default function MovieCard(props) {
  const {
    title, genre, year, src, id, releaseDate, url, overview, runtime,
    handleClose,
  } = props;

  const [ deleteMovie, deleteMovieOpen ] = useState(false);
  const [ editMovie, editMovieOpen ] = useState(false);

  const deleteMoviePopup = () => {
    deleteMovieOpen(!deleteMovie);
  };
  const editMoviePopup = () => {
    debugger;
    editMovieOpen(!editMovie);
  };

  return (
    <div className="movie-card">
      <MovieMenu
        deleteMovie = {() => deleteMoviePopup()}
        editMovie = {() => editMoviePopup()}
      />
      <MovieEditPopup
        isOpen={editMovie}
        handleClose={handleClose}
        title={title}
        genre={genre}
        releaseDate={releaseDate}
        src={src}
        url={url}
        overview={overview}
        runtime={runtime}
        id={id}
      />
      <MovieDeletePopup
        isOpen={deleteMovie}
        handleClose={handleClose}
      />
      <img src={src} alt={title} className="movie-card__img" />
      <div className="movie-card__info">
        <div className="movie-card__title-wrap">
          <h3 className="movie-card__title">{title}</h3>
          <p className="movie-card__descrp">{genre}</p>
        </div>
        <p className="movie-card__year">{year}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
