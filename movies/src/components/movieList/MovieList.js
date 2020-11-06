import React from 'react';
import { useSelector } from 'react-redux'
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import NoMovie from '../noMovie/NoMovie';
import ResultCount from '../resultCount/ResultCount';

const setMovieGenre = (movie) => {
  if(Array.isArray(movie.genres)) {
    return movie.genres.join(', ');
  }
  return movie.genres
};
const setMovieYear = (movie) => movie.release_date && +movie.release_date.substr(0, 4);

const MoviesList = ({selectMovie}) => {
  const movies = useSelector(state => state.movies.data);
  const isMovieListLoaded = movies && movies.length;

  return (
    <>
      { isMovieListLoaded ?
        <div className="movie-list">
          <Route path="/search">
            <ResultCount
              count={movies.length}
            />
          </Route>
          {
            movies.length ? movies.map((movie) => (
              <Route path={["/search", "/film"]}>
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
        <NoMovie/>
      }
    </>
  );
};

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
