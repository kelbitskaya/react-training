import reducers from './reducers';
import * as types from '../actions/actionTypes';
import {FETCH_MOVIES_LIST_SUCCESS} from "../actions/actionTypes";
import {FETCH_MOVIES_LIST_FAILURE} from "../actions/actionTypes";
import {CHANGE_MOVIES_LIST} from "../actions/actionTypes";
import {UPDATE_MOVIE} from "../actions/actionTypes";

describe('reducers', () => {

  test('FETCH_MOVIES_LIST_REQUEST', () => {
    const initialState = { loading: true };
    const action = { type: types.FETCH_MOVIES_LIST_REQUEST };
    const result = reducers(initialState, action);
    expect(result.loading).toBeTruthy();
  });

  test('FETCH_MOVIES_LIST_SUCCESS', () => {
    const action = { type: types.FETCH_MOVIES_LIST_SUCCESS, payload: {data: ''}};
    const initialState = {
      loading: false,
      movies: action.payload,
      sortingType: 'release_date',
      filteringType: 'all',
      error: ''
    };
    const result = reducers(initialState, action);
    expect(result.error).toBeFalsy();
  });

  test('FETCH_MOVIES_LIST_FAILURE', () => {
    const action = { type: types.FETCH_MOVIES_LIST_FAILURE, payload: "Error text"};
    const initialState = {
      loading: false,
      movies: [],
      error: action.payload
    };
    const result = reducers(initialState, action);
    expect(result.error).toBeTruthy();
  });

  test('CHANGE_MOVIES_LIST', () => {
    const action = { type: types.CHANGE_MOVIES_LIST,  payload: {data: ''}};
    const initialState = {
      movies: action.payload,
    };
    const result = reducers(initialState, action);
    expect(result.movies).toBeTruthy();
  });

  test('UPDATE_MOVIE', () => {
    const action = { type: types.UPDATE_MOVIE,  payload: {data: ''}};
    const initialState = {
      currentMovie: action.payload,
    };
    const result = reducers(initialState, action);
    expect(result.currentMovie).toBeTruthy();
  });
});

