import React from 'react';
import ResultFilter from './ResultFilter';
import SortBy from './SortBy';

export default function Filters(props) {
  const { updateMovies } = props;
  return (
    <div className="filters">
      <ResultFilter updateMovies={updateMovies}/>
      <SortBy updateMovies={updateMovies}/>
    </div>
  );
}
