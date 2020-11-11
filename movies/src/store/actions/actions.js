import axios from "axios";
import * as types from './actionTypes';

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

export const fetchMovies = (sortBy, filter, title) => {
  return function (dispatch) {
    dispatch(fetchMoviesRequest());

    axios.get('http://localhost:4000/movies', {
      params: {
        limit: 9,
        sortOrder: 'asc',
        sortBy: sortBy || 'release_date',
        filter: filter,
        search: title,
        searchBy: 'title'
      }
    })
      .then(response => {
        dispatch(fetchMoviesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message))
      })
  }
};

export const deleteMovie = (id, searchType) => async dispatch => {
  try {
    await axios.delete(`http://localhost:4000/movies/${id}`);
    dispatch(fetchMovies('', '', searchType));
  } catch (error) {
    console.error();
  }
};

export const updateMovieInList = data => {
  return {
    type: types.UPDATE_MOVIE,
    payload: data
  }
};

export const getMovieById = (id) => async dispatch => {
  await axios({
    method: 'get',
    url: `http://localhost:4000/movies/${id}`,
  }).then(response => {
    dispatch(updateMovieInList(response.data));
  });
};



export const updateMovie = (data, searchType, sortBy) => async dispatch => {
  await axios({
    method: 'put',
    url: 'http://localhost:4000/movies/',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({...data})
  });
  dispatch(fetchMovies(sortBy, '', searchType));
};

export const addMovie = (data) => async dispatch => {
  await axios({
    method: 'post',
    url: 'http://localhost:4000/movies/',
    headers: {'Content-Type': 'application/json'},
    data: data
  });
  dispatch(fetchMovies('', '', ''));
};

export const editMoviesList = movies => {
  return {
    type: types.CHANGE_MOVIES_LIST,
    payload: movies
  }
};

