import axios from "axios";
import loaderAction from './loaderAction';
import * as types from './actionTypes';
import store from '../store'

export const fetchMoviesRequest = () => {
  return {
    type: types.FETCH_MOVIES_LIST_REQUEST
  }
};

export const fetchMoviesSuccess = movies => {
  return {
    type: types.FETCH_MOVIES_LIST_SUCCESS,
    payload: movies
  }
};

export const fetchMoviesFailure = error => {
  return {
    type: types.FETCH_MOVIES_LIST_FAILURE,
    payload: error
  }
};

export const fetchMovies = (sortBy, filter, offset, shouldUpdateState) => {
  return function (dispatch) {
    dispatch(fetchMoviesRequest());
    axios.get(`http://localhost:4000/movies?&limit=9&sortOrder=asc${sortBy === 'title' ? '&sortBy=title' : sortBy === 'rating' ? '&sortBy=vote_average' : '&sortBy=release_date'}${filter ? `&filter=${filter}` : ''}`)
      .then(response => {
        dispatch(fetchMoviesSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message))
      })
  }
};


store.dispatch(fetchMovies());
