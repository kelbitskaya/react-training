import React, {useEffect} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import NoMovie from '../noMovie/NoMovie';
import ResultCount from '../resultCount/ResultCount';
import {useRouter} from 'next/router';
import {fetchMovies} from "../../store/actions/actions";

const setMovieGenre = (movie) => {
  if(Array.isArray(movie.genres)) {
    return movie.genres.join(', ');
  }
  return movie.genres
};
const setMovieYear = (movie) => movie.release_date && +movie.release_date.substr(0, 4);

const MoviesList = ({selectMovie, movies}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(()=>{
    if (!router.asPath.includes('film')) {
      const searchTerm = router.asPath.slice(8);
      dispatch(fetchMovies('', '', searchTerm));
    }
  }, [router.asPath]);

  return (
    <>
        <div className="movie-list">
            <ResultCount
              count={movies && movies.data && movies.data.length}
            />
          {console.log(movies)}
          {
            movies && movies.data && movies.data.length ? movies.data.map((movie) => (
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
            ))
              :
              <NoMovie/>
          }
        </div>
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    movies: store.movies,
  }
};

export default connect(mapStateToProps)(MoviesList);
