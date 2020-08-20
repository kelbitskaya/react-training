import React from 'react';
import Dropdown from '../common/dropdown/Dropdown';

const filters = ['release date', 'title'];

export default function SortBy() {
  return (
    <div className="sort-by">
      <p>sort by</p>
      <Dropdown options={filters} />
    </div>
  );
}
