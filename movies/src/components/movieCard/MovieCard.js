import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import MovieMenu from '../movieMenu/MovieMenu';
import MovieDeletePopup from '../movieDeletePopup/movieDeletePopup';
import MovieEditPopup from '../movieEditPopup/movieEditPopup';


const setMovieYear = (date) => date.substr(0, 4);

export default function MovieCard(props) {
  const {
    title, genre, year, src, id, releaseDate, url, overview, runtime, selectMovie, description, rating,
  } = props;

  const [cardObject, setCardObject] = useState({
    title,
    genre,
    releaseDate,
    src,
    url,
    overview,
    runtime,
    id,
    year,
    description,
    rating
  });

  const [deleteMovie, deleteMovieOpen] = useState(false);
  const [editMovie, editMovieOpen] = useState(false);

  const deleteMoviePopup = useCallback(() => {
    deleteMovieOpen(!deleteMovie);
  },[deleteMovie]);

  const editMoviePopup = useCallback((editedValues) => {
    if(editedValues) {
      setCardObject({
        ...cardObject,
        title: editedValues.title,
        overview: editedValues.overview,
        poster_path: editedValues.poster_path,
        releaseDate: editedValues.release_date,
        runtime: editedValues.runtime,
      })
    }
    editMovieOpen(!editMovie);
  },[editMovie, cardObject]);

  return (
    <div className="movie-card">
      <MovieMenu
        deleteMovie={() => deleteMoviePopup()}
        editMovie={() => editMoviePopup()}
      />
      <MovieEditPopup
        isOpen={editMovie}
        handleClose={editMoviePopup}
        title={cardObject.title}
        genre={cardObject.genre}
        releaseDate={cardObject.releaseDate}
        src={cardObject.src}
        url={cardObject.url}
        overview={cardObject.overview}
        runtime={cardObject.runtime}
        id={cardObject.id}
      />
      <MovieDeletePopup
        isOpen={deleteMovie}
        handleClose={deleteMoviePopup}
        id={id}
      />
      <img
        src={src}
        alt={title}
        className="movie-card__img"
        role="presentation"
        onClick={() => selectMovie(id)}
        onKeyDown={() => selectMovie(id)} />
      <div className="movie-card__info">
        <div className="movie-card__title-wrap">
          <h3 className="movie-card__title">{cardObject.title}</h3>
          <p className="movie-card__rating">{cardObject.rating}</p>
          <p className="movie-card__descrp">{cardObject.genre}</p>
        </div>
        <div className="movie-card__time">
          <p className="movie-card__year">{setMovieYear(cardObject.releaseDate)}</p>
          <p className="movie-card__runtime">{cardObject.runtime}</p>
        </div>
        <div className="movie-card__full-descrp">{cardObject.description}</div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectMovie: PropTypes.func.isRequired,
};
