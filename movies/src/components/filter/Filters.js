import React from 'react';
import ResultFilter from './ResultFilter';
import SortBy from './SortBy';

export default function Filters() {
  return (
    <div className="filters">
      <ResultFilter />
      <SortBy />
    </div>
  );
}
