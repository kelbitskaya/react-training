import React from 'react';

const genre = [
  {
    title: 'all',
    id: 'g1',
  },
  {
    title: 'documentary',
    id: 'g2',
  },
  {
    title: 'comedy',
    id: 'g3',
  },
  {
    title: 'crime',
    id: 'g4',
  },
  {
    title: 'crime',
    id: 'g5',
  },
];

export default function ResultFilter() {
  return (
    <ul className="genre-filter">
      { genre.map((elem, index) => (
        <li
          className={!index ? 'genre-filter__item active' : 'genre-filter__item'}
          key={elem.id}
        >
          {elem.title}
        </li>
      ))}
    </ul>
  );
}
