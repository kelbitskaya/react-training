import React from 'react';

const genre = ['all', 'documentary', 'comedy', 'horror', 'crime'];

export default function ResultFilter() {
  return (
    <ul className="genre-filter">
      { genre.map((elem, index) => (
        <li
          className={!index ? 'genre-filter__item active' : 'genre-filter__item'}
        >
          {elem}
        </li>
      ))}
    </ul>
  );
}
