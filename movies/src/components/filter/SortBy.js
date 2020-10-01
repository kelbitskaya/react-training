import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../common/dropdown/Dropdown';
import Constants from '../constants';

export default function SortBy(props) {
  const { updateMovies } = props;
  const sortBy = (sortType) => (a, b) => (a[sortType.type] > b[sortType.type] ? 1 : -1);

  const applySortMovies = useCallback((sortType) => {
    const sortedMovieList = Array.from(Constants.MOVIES).sort(sortBy(sortType));
    updateMovies(sortedMovieList);
  }, [updateMovies]);

  return (
    <div className="sort-by">
      <p className="sort-by__text">sort by</p>
      <Dropdown options={Constants.FILTERS} updateMovies={applySortMovies}/>
    </div>
  );
}

SortBy.propTypes = {
  updateMovies: PropTypes.func.isRequired,
};
