import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import ResultCount from '../resultCount/ResultCount';

const movies = [
  {
    title: 'Pulp Fiction',
    src: 'https://sun9-35.userapi.com/c857420/v857420555/234bc6/kY269xlBN8w.jpg',
    genre: 'Action & Adventure',
    year: '2004',
    id: 'id1',
  },
  {
    title: 'Bohemian Rhapsody',
    src: 'https://sun9-7.userapi.com/c857420/v857420555/234bcf/RmHW-0vWqkM.jpg',
    genre: 'Drama, Biography, Music',
    year: '2003',
    id: 'id2',
  },
  {
    title: 'Kill Bill: Vol 2',
    src: 'https://sun9-72.userapi.com/c857420/v857420555/234bd8/T5W2-PnUJ0c.jpg',
    genre: 'Oscar winning Movie',
    year: '1994',
    id: 'id3',
  },
  {
    title: 'Avengers: War of Infinity',
    src: 'https://sun9-64.userapi.com/c857420/v857420555/234bea/nf_B3uNIUec.jpg',
    genre: 'Action & Adventure',
    year: '2004',
    id: 'id4',
  },
  {
    title: 'Inception',
    src: 'https://sun9-19.userapi.com/c857420/v857420555/234be1/KjyVInWECI8.jpg',
    genre: 'Action & Adventure',
    year: '2003',
    id: 'id5',
  },
  {
    title: 'Reservoir Dogs',
    src: 'https://sun9-42.userapi.com/c857420/v857420555/234bf3/ejzURMUgOhk.jpg',
    genre: 'Oscar winning Movie',
    year: '1994',
    id: 'id6',
  },

];

export default function MoviesList() {
  return (
    <div className="movie-list">
      <ResultCount
        count={movies.length}
      />
      { movies.map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.genre}
          year={movie.year}
          src={movie.src}
          key={movie.id}
        />
      ))}
    </div>
  );
}
