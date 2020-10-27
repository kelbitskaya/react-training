import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Constants from '../constants';
import {changeFiltering} from "../../store/actions/actions";

const mapStateToProps =(state) => {
  return {
    movies: state,
    filteringType: state
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMovies: changeFiltering}, dispatch)
};


const ResultFilter = (props) => {
  const genres = Constants.GENRE;
  const { updateMovies, sortMovieList } = props;
  const [activeGenre, setActiveGenre] = useState(genres[0]);

  // const sortMovieList = (movieGenre) => {
  //   const movieList = Constants.MOVIES;
  //   if (movieGenre.id === genres[0].id) {
  //     updateMovies(movieList);
  //     setActiveGenre(genres[0]);
  //   } else {
  //     const currentGenre = movieGenre.title;
  //
  //     const sortedMovieList = movieList.filter((movie) => movie.genre.some(
  //       (genre) => genre.toLowerCase === activeGenre,
  //     ));
  //
  //     const activeGenreIndex = genres.findIndex((el) => el.title === currentGenre);
  //     setActiveGenre(genres[activeGenreIndex]);
  //
  //     updateMovies(sortedMovieList);
  //   }
  // };

  const filterMovies = useCallback((e) => {
    const genre = e.target.dataset && e.target.dataset.name;
    Array.from(document.querySelectorAll('.genre-filter__item')).forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');
    updateMovies(genre);
  }, [updateMovies]);

  return (
    <ul className="genre-filter">
      { Constants.GENRE.map((genre) => (
        <li key={genre.id}>
          <button
            type="button"
            data-name={genre.title}
            className={genre.title === activeGenre.title ? 'genre-filter__item active' : 'genre-filter__item'}
            key={genre.id}
            onClick={filterMovies}
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

export default connect(mapStateToProps, matchDispatchToProps)(ResultFilter);
