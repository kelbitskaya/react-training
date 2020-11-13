import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../common/Logo';
import Search from '../search/Search';
import AddButton from '../addButton/AddButton';
import MovieCard from '../movieCard/MovieCard';
import SearchButton from '../searchButton/SearchButton';
import {getMovieById} from '../../store/actions/actions';
import { useRouter } from 'next/router';


const mapStateToProps = (state) => {
  return {
    movie: state.currentMovie,
  }
};

const matchDispatchToProps = {getMovie: getMovieById};

const setMovieGenre = (movie) => movie.genres && movie.genres.join(', ');
const setMovieYear = (movie) => movie.release_date && +movie.release_date.substr(0, 4);


const Header = ({movie}) => {

  const router = useRouter();
  console.log(router);


  const dispatch = useDispatch();
  const { pathname } = router;

  const redirectToHomePage = () => {
    router.push('/');
  };


  useEffect(() => {
    if (router.asPath.includes('film')) {
      const movieId = router.asPath.slice(6);
      dispatch(getMovieById(movieId));
    }
  }, [router.asPath]);



  return (
    <header className="header">
      <div className="header__content">
        <div className="header-line">
          <Logo />
        </div>

        {
          movie ?
            <>
              <SearchButton/>
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
            </>
            :
            <>
              <AddButton/>
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
  }),
};

Header.defaultProps = {
  movie: {},
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
