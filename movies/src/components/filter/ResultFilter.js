import React, { useState } from 'react';
import Constants from '../constants';

export default function ResultFilter(props) {
  const genres = Constants.GENRE;
  const { updateMovies } = props;
  const [activeGenre, setActiveGenre] = useState(genres[0]);

  const sortMovieList = (genre) => {
    const movieList = Constants.MOVIES;
    if (genre.id === genres[0].id) {
      console.log(genres);

      updateMovies (movieList);
      setActiveGenre(genres[0]);

    }
    else  {
      const activeGenre = genre.title;

      const sortedMovieList =  movieList.filter((movie)=> {
        let isMovieApplicable = false;
        movie.genre.forEach((genre)=> (genre.toLowerCase() === activeGenre) && (isMovieApplicable=true));
        return isMovieApplicable;
      });

      const activeGenreIndex = genres.findIndex(el => el.title === activeGenre);
      setActiveGenre(genres[activeGenreIndex]);

      updateMovies (sortedMovieList);
    }
  };

  const filterMovies = (genre) => {
    sortMovieList(genre);
  };

  return (
    <ul className="genre-filter">
      { Constants.GENRE.map((genre) => (
        <li
          className={genre.title ===  activeGenre.title ? 'genre-filter__item active' : 'genre-filter__item'}
          key={genre.id}
          onClick={() => filterMovies(genre)}
        >
          {genre.title}
        </li>
      ))}
    </ul>
  );
}
