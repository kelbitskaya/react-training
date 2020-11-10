import reducers from './reducers';
import * as types from '../actions/actionTypes';
import {FETCH_MOVIES_LIST_SUCCESS} from "../actions/actionTypes";
import {FETCH_MOVIES_LIST_FAILURE} from "../actions/actionTypes";
import {CHANGE_MOVIES_LIST} from "../actions/actionTypes";
import {UPDATE_MOVIE} from "../actions/actionTypes";

describe('reducers', () => {
  test('should return initial state', () => {
    const initReducer = reducers(undefined, {});
    expect(initReducer).toEqual(
      {
        loading: false,
        movies: [],
        error: '',
        sortingType: 'release_date',
        filteringType: 'all',
        currentMovie: null
      }
    );
  });

  test('FETCH_MOVIES_LIST_REQUEST', () => {
    const initialState = { loading: true };
    const action = { type: types.FETCH_MOVIES_LIST_REQUEST };
    const result = reducers(initialState, action);
    expect(result).toEqual(
      {
        loading: true
      }
    );
  });

  test('FETCH_MOVIES_LIST_SUCCESS', () => {
    const action = { type: types.FETCH_MOVIES_LIST_SUCCESS, payload: []};
    const initialState = {
      loading: false,
      movies: [],
      error: '',
      sortingType: 'release_date',
      filteringType: 'all',
    };
    const result = reducers(initialState, action.payload);
    expect(result).toEqual(
      {
        loading: false,
        movies: action.payload,
        error: '',
        sortingType: 'release_date',
        filteringType: 'all',
      }
    );
  });

  test('FETCH_MOVIES_LIST_FAILURE', () => {
    const action = { type: types.FETCH_MOVIES_LIST_FAILURE, payload: "Error text"};
    const initialState = {
      loading: false,
      movies: [],
      error: action.payload
    };
    const result = reducers(initialState, action);
    expect(result).toEqual(
      {
        loading: false,
        movies: [],
        error: action.payload
      }
    );
  });

  test('CHANGE_MOVIES_LIST', () => {
    const action = { type: types.CHANGE_MOVIES_LIST,  payload: []};
    const initialState = {
      loading: false,
      movies: action.payload,
      error: '',
    };
    const result = reducers(initialState, action);
    expect(result).toEqual(
      {
        loading: false,
        movies: action.payload,
        error: '',
      }
    );
  });

  test('UPDATE_MOVIE', () => {
    const action = { type: types.UPDATE_MOVIE,  payload: {data: ''}};
    const initialState = {
      loading: false,
      movies: [],
      error: '',
      sortingType: 'release_date',
      filteringType: 'all',
      currentMovie: action.payload,
    };
    const result = reducers(initialState, action);
    expect(result).toEqual(
      {
        loading: false,
        movies: [],
        error: '',
        sortingType: 'release_date',
        filteringType: 'all',
        currentMovie: action.payload,
      }
    );
  });
});

