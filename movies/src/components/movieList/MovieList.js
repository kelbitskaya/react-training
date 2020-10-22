import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/MovieCard';
import ResultCount from '../resultCount/ResultCount';
import {editMoviesList, fetchMovies} from '../../store/actions/actions';
import sortBy from '../../helpers/sortBy';
import Constants from "../constants";

const setMovieGenre = (movie) => movie.genres.join(', ');
const setMovieYear = (movie) => +movie.release_date.substr(0, 4);

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,     // state.movies
    sortingType: state.sortingType, // state.sortingType
    filteringType: state.filteringType
  }
};

const MoviesList = (props) => {
  const { movies, selectMovie, sortingType, filteringType } = props;
  const isMovieListLoaded = movies && movies.length;

  useEffect(() => {
    props.dispatch(fetchMovies());
  },[]);


  const sortMovieList = (movieGenre, movieList) => {
    if (movieGenre === Constants.GENRE[0].title) {
      return movieList;
    } else {
      return movieList.filter((movie) => movie.genres.some(
        (genre) => genre.toLowerCase() === movieGenre,
      ));
    }
  };

  const sortedMovieList = useMemo(()=>{
    let movieList = [];
    if(movies && sortingType) {
      movieList = movies.sort(sortBy(sortingType));
    }
    if(movieList.length && filteringType) {
      movieList = sortMovieList(filteringType, movieList);
    }
    return movieList;
  },[movies, sortingType, filteringType]);

  const editMovie = (movieId) => {
    console.log(movieId);
  };

  return (
    <>
      { isMovieListLoaded ?
        <div className="movie-list">
          <ResultCount
            count={sortedMovieList.length}
          />
          { sortedMovieList.length ? sortedMovieList.map((movie) => (
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
              editingMovie={editMovie}
            />
          ))
          :
            ''
          }
        </div>
      :
        <p>Movies is loading</p>
      }
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.shape({
    length: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    map: PropTypes.func.isRequired,
    movies: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
  }).isRequired,
  selectMovie: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MoviesList);
