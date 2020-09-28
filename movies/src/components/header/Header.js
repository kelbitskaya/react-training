import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../common/Logo';
import Search from '../search/Search';
import AddButton from '../addButton/AddButton';
import MovieCard from '../movieCard/MovieCard';
import SearchButton from '../searchButton/SearchButton';

const setMovieGenre = (movie) => movie.genre.join(', ');

export default function Header(props) {
  const { isMovieSelected, selectedMovie, goHomePage } = props;
  return (
    <header className="header">
      <div className="header__content">
        <div className="header-line">
          <Logo />

          {
            !isMovieSelected ?
              <AddButton />
              :
              <SearchButton goHomePage={goHomePage}/>
          }
        </div>
      {
        isMovieSelected ?
          <MovieCard
            title={selectedMovie.title}
            genre={setMovieGenre(selectedMovie)}
            year={selectedMovie.year}
            releaseDate={selectedMovie.releaseDate}
            src={selectedMovie.src}
            url={selectedMovie.url}
            id={selectedMovie.id}
            key={selectedMovie.id}
            overview={selectedMovie.overview}
            runtime={selectedMovie.runtime}
            description={selectedMovie.description}
            rating={selectedMovie.rating}
          />
          :
            <>
            <div className="movie-search">
              <h1 className="header__title">find your movie</h1>
              <Search
                placeholder="What do you want to watch?"
              />
            </div>
            </>
      }
          </div>

    </header>
  );
}

Header.propTypes = {
  selectedMovie: PropTypes.shape({
    length: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectMovie: PropTypes.func.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  goHomePage: PropTypes.func.isRequired,
  isMovieSelected: PropTypes.number.isRequired,
};
