import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCard(props) {
  const {
    title, description, year, src,
  } = props;
  return (
    <div className="movie-card">
      <img src={src} alt="" className="movie-card__img" />
      <div className="movie-card__info">
        <div className="movie-card__title">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <p className="movie-card__year"><span>{year}</span></p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
};

MovieCard.defaultProps = {
  title: 'Just a Perfect Movie',
  src: 'https://sun9-16.userapi.com/c857420/v857420937/235f67/l2EDojYXelQ.jpg',
  description: 'The best genre',
  year: '2020',
};
