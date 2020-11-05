import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Route, withRouter} from 'react-router';
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import NoMovie from '../noMovie/NoMovie';
import ResultCount from '../resultCount/ResultCount';
import {fetchMovies} from '../../store/actions/actions';

const setMovieGenre = (movie) => {
  if(Array.isArray(movie.genres)) {
    return movie.genres.join(', ');
  }
  return movie.genres
};
const setMovieYear = (movie) => movie.release_date && +movie.release_date.substr(0, 4);

const MoviesList = withRouter (({history, selectMovie}) => {
  const movies = useSelector(state => state.movies.data);
  const isMovieListLoaded = movies && movies.length;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  },[]);

  return (
    <>
      { isMovieListLoaded ?
        <div className="movie-list">
          <Route path="/search/*">
            <ResultCount
              count={movies.length}
            />
          </Route>
          {
            movies.length ? movies.map((movie) => (
              <Route path={["/search/*", "/film"]}>
                <MovieCard
                  title={movie.title}
                  genre={setMovieGenre(movie)}
                  year={setMovieYear(movie)}
                  releaseDate={movie.release_date}
                  src={movie.poster_path}
                  url={movie.poster_path}
                  id={movie.id}
                  key={movie.id}
                  overview={movie.overview}
                  runtime={movie.runtime}
                  selectMovie={selectMovie}
                />
              </Route>
            ))
              :
              <NoMovie/>
          }
          <Route exact path="/" component={NoMovie}/>
        </div>
      :
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0f17e9c8fa9ca8050c3e4f2e5bfc4da3-1591607734/Black_background/create-loading-animation-for-your-business-needs.gif"
          alt="loading"
          className="loading"/>
      }
    </>
  );
});

MoviesList.propTypes = {
  movies: PropTypes.shape({
    length: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    map: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired,
    movies: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
  }).isRequired,
  selectMovie: PropTypes.func.isRequired,
};

export default MoviesList;
