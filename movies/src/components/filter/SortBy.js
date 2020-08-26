import React from 'react';
import Dropdown from '../common/dropdown/Dropdown';

const filters = [
  {
    title: 'release date',
    id: 'f1',
  },
  {
    title: 'title',
    id: 'f2',
  },
];

export default function SortBy() {
  return (
    <div className="sort-by">
      <p className="sort-by__text">sort by</p>
      <Dropdown options={filters} />
    </div>
  );
}
