import { combineReducers } from 'redux';
import {
  FETCH_MOVIES_LIST_REQUEST,
  FETCH_MOVIES_LIST_SUCCESS,
  FETCH_MOVIES_LIST_FAILURE,
  CHANGE_SORTING,
  CHANGE_FILTERING,
  CHANGE_MOVIES_LIST
} from "../actions/actionTypes"

const initialState = {
  loading: false,
  movies: [],
  error: '',
  sortingType: 'release_date',
  filteringType: 'all'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIES_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
        sortingType: 'release_date',
        filteringType: 'all',
        error: ''
      };
    case FETCH_MOVIES_LIST_FAILURE:
      return {
        loading: false,
        movies: [],
        error: action.payload
      };

    case CHANGE_SORTING:
      return {
        ...state,
        sortingType: action.payload
      };
    case CHANGE_FILTERING:
      return {
        ...state,
        filteringType: action.payload
      };

    case CHANGE_MOVIES_LIST:
      console.info(action.payload);
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};


export default rootReducer;
