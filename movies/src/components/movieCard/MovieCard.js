import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import MovieMenu from '../movieMenu/MovieMenu';
import MovieDeletePopup from '../movieDeletePopup/movieDeletePopup';
import MovieEditPopup from '../movieEditPopup/movieEditPopup';
import {getMovieById} from "../../store/actions/actions";

const mapStateToProps = (state) => {
  return {
    movie: state.currentMovie,
  }
};

const matchDispatchToProps = {getMovie: getMovieById};

const MovieCard = ({title, genre, year, src, id, releaseDate, url, overview, runtime,
                     selectMovie, description, rating, getMovie }) => {

  let history = useHistory();
  const [deleteMovie, deleteMovieOpen] = useState(false);
  const [editMovie, editMovieOpen] = useState(false);

  const deleteMoviePopup = useCallback(() => {
    deleteMovieOpen(!deleteMovie);
  },[deleteMovie]);

  const editMoviePopup = useCallback(() => {
    editMovieOpen(!editMovie);
  },[editMovie, editMoviePopup]);

  const receiveMovie = (movieId) => {
    getMovie(movieId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    history.push(`/film/${movieId}`)
  };

  return (
    <div className="movie-card">
      <MovieMenu
        deleteMovie={() => deleteMoviePopup()}
        editMovie={() => editMoviePopup()}
      />
      <MovieEditPopup
        isOpen={editMovie}
        handleClose={editMoviePopup}
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
        handleClose={deleteMoviePopup}
        id={id}
      />
      <img
        src={src}
        alt={title}
        className="movie-card__img"
        role="presentation"
        onClick={() => receiveMovie(id)}
        onKeyDown={() => selectMovie(id)} />
      <div className="movie-card__info">
        <div className="movie-card__title-wrap">
          <h3 className="movie-card__title">{title}</h3>
          <p className={rating ? 'movie-card__rating' : 'hide'}>{rating}</p>
          <p className="movie-card__descrp">{genre}</p>
        </div>
        <div className="movie-card__time">
          <p className="movie-card__year">{releaseDate}</p>
          <p className="movie-card__runtime">{runtime} min</p>
        </div>
        <div className="movie-card__full-descrp">{description}</div>
      </div>
    </div>
  );
};

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
  getMovie: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, matchDispatchToProps)(MovieCard);
