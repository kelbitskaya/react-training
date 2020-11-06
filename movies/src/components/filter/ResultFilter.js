import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Constants from '../constants';
import {fetchMovies} from "../../store/actions/actions";
import { useHistory, useLocation } from "react-router-dom";

const matchDispatchToProps = {updateMovies: fetchMovies};

const ResultFilter = (props) => {
  const { updateMovies } = props;
  const [activeGenre, setActiveGenre] = useState(0);
  let history = useHistory();
  let location = useLocation();


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    const index = Constants.GENRE.reduce((p,c,i) => {
      return c.title.toLowerCase() === filter ? i : p
    }, 0);
    setActiveGenre(index);
  });

  const filterMovies = useCallback((e, index) => {
    const currentLocation = !!location.search ? location.search : history.location.search;
    const params = new URLSearchParams(currentLocation);
    const genre = e.target.dataset && e.target.dataset.name;
    const currentGenre = (genre  === 'all') ? '' : genre.toLowerCase();
    const title = params.get('q');
    const sortBy = params.get('sortBy');
    setActiveGenre(index);

    currentGenre && params.set('filter', currentGenre);

    history.push(`/search?${params.toString()}`);
    updateMovies(sortBy, currentGenre, title);
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
