import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../common/Logo';
import Search from '../search/Search';
import AddButton from '../addButton/AddButton';
import MovieCard from '../movieCard/MovieCard';
import SearchButton from '../searchButton/SearchButton';
import {getMovieById} from '../../store/actions/actions';


const mapStateToProps = (state) => {
  return {
    movie: state.currentMovie,
  }
};

const matchDispatchToProps = {getMovie: getMovieById};

const setMovieGenre = (movie) => movie.genres && movie.genres.join(', ');
const setMovieYear = (movie) => movie.release_date && +movie.release_date.substr(0, 4);


const Header = (props) => {
  const { movie } = props;
  const [isMovieSelected, selectedMovieId] = useState(false);

  const redirectToHomePage = () => {
    selectedMovieId(true)
  };


  return (
    <header className="header">
      <div className="header__content">
        <div className="header-line">
          <Logo />

          {
            isMovieSelected || !movie?
              <AddButton />
              :
              <SearchButton goHomePage={redirectToHomePage}/>
          }
        </div>
      {
        isMovieSelected || !movie ?
        <>
          <div className="movie-search">
            <h1 className="header__title">find your movie</h1>
            <Search
              placeholder="What do you want to watch?"
            />
          </div>
        </>

          :
          <MovieCard
            title={movie.title}
            genre={setMovieGenre(movie)}
            year={movie.year}
            releaseDate={setMovieYear(movie)}
            src={movie.poster_path}
            url={movie.poster_path}
            id={movie.id}
            key={movie.id}
            overview={movie.overview}
            runtime={movie.runtime}
            description={movie.overview}
            rating={movie.vote_average}
          />
      }
          </div>

    </header>
  );
};

Header.propTypes = {
  movie: PropTypes.shape({
    length: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    vote_average: PropTypes.string.isRequired,
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
};


export default connect(mapStateToProps, matchDispatchToProps)(Header);
