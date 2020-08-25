import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCard(props) {
  const {
    title, description, year, src,
  } = props;
  return (
    <div className="movie-card">
      <img src={src} alt={title} className="movie-card__img" />
      <div className="movie-card__info">
        <div className="movie-card__title-wrap">
          <h3 className="movie-card__title">{title}</h3>
          <p className="movie-card__descrp">{description}</p>
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
