import React from 'react';
import Dropdown from '../common/dropdown/Dropdown';
import Constants from '../constants';

export default function SortBy(props) {
  const { updateMovies } = props;
  const sortBy = (sortType) => {
    return (a, b) => a[sortType.type] > b[sortType.type] ? 1 : -1;
  };

  const applySortMovies = (sortType) => {
    const sortedMovieList = Constants.MOVIES.sort(sortBy(sortType));
    updateMovies(sortedMovieList);
  };

  return (
    <div className="sort-by">
      <p className="sort-by__text">sort by</p>
      <Dropdown options={Constants.FILTERS} updateMovies={applySortMovies}/>
    </div>
  );
}
