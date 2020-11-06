import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Constants from '../constants';
import {fetchMovies} from "../../store/actions/actions";
import { useHistory } from "react-router-dom";

const matchDispatchToProps = {updateMovies: fetchMovies};

const ResultFilter = (props) => {
  const { updateMovies } = props;
  const [activeGenre, setActiveGenre] = useState(0);
  let history = useHistory();

  const filterMovies = useCallback((e, index) => {
    setActiveGenre(index);
    const genre = e.target.dataset && e.target.dataset.name;
    const currentGenre = (genre  === 'all') ? '' : genre;
    history.push(`/search?filter=${currentGenre}`);
    updateMovies('', currentGenre);
  }, [updateMovies]);

  return (
    <ul className="genre-filter">
      { Constants.GENRE.map((genre, index) => (
        <li key={genre.id}>
          <button
            type="button"
            data-name={genre.title}
            className={activeGenre === index ? 'genre-filter__item active' : 'genre-filter__item'}
            key={genre.id}
            onClick={(e)=>filterMovies(e, index)}
          >
            {genre.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

ResultFilter.propTypes = {
  updateMovies: PropTypes.func.isRequired,
};

export default connect(null, matchDispatchToProps)(ResultFilter);
