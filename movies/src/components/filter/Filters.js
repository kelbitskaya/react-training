import React from 'react';
import PropTypes from 'prop-types';
import ResultFilter from './ResultFilter';
import SortBy from './SortBy';

export default function Filters(props) {
  const { updateMovies } = props;
  return (
    <div className="filters">
      <ResultFilter updateMovies={updateMovies} />
      <SortBy updateMovies={updateMovies} />
    </div>
  );
}

Filters.propTypes = {
  updateMovies: PropTypes.func.isRequired,
};
