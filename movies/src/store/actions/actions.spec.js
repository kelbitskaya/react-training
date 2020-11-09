import axios from 'axios';
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from "redux-mock-store";

import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  editMoviesList,
  fetchMovies,
  addMovie,
  updateMovie,
  getMovieById,
  updateMovieInList
} from "./actions";
import {expect} from "@jest/globals";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe("movie actions", () => {
  const sortBy = 'title';
  const title = 'title';
  const searchType = 'title';
  const filter = 'comedy';

  const data = {
    'id': 111,
    'title': 'test',
    'release_date': '1999-01-01',
    'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    'genres': ['Comedy', 'Crime'],
    'runtime': 155,
    'overview': 'overview text',
  };

  const responseData = {
    'id': 111,
    'title': 'test',
    'release_date': '1999-01-01',
    'poster_path': 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    'genres': ['Comedy', 'Crime'],
    'runtime': 155,
    'overview': 'overview text',
  };

  test("fetchMoviesRequest", () => {
    expect(fetchMoviesRequest()).toBeTruthy();
  });

  test("fetchMoviesSuccess", () => {
    const payload = true;
    expect(fetchMoviesSuccess(payload)).toBeTruthy();
  });

  test("fetchMoviesFailure", () => {
    const payload = true;
    expect(fetchMoviesFailure(payload)).toBeTruthy();
  });

  test("editMoviesList", () => {
    const payload = true;
    expect(editMoviesList(payload)).toBeTruthy();
  });

  test("updateMovieInList", () => {
    const payload = true;
    expect(updateMovieInList(payload)).toBeTruthy();
  });


  test('fetchMovies', () => {
    const dispatch = jest.fn();
    const request = {"type": "FETCH_MOVIES_LIST"};
    axios.get.mockReturnValue(Promise.resolve(responseData));
    fetchMovies({
      sortBy,
      filter,
      title
    })(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch).toHaveBeenCalledWith(request);
  });


  test('fetchMovies', () => {
    const dispatch = jest.fn();
    const request = {"type": "FETCH_MOVIES_LIST"};
    axios.get.mockReturnValue(Promise.reject(responseData));
    fetchMovies({
      sortBy,
      filter,
      title
    })(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch).toHaveBeenCalledWith(request);
  });


  test('addMovie', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    const dispatch = jest.fn();
    const fetchMovies = jest.fn();
    const result = await addMovie(data);
    expect(dispatch(fetchMovies(result)));
  });

  test('updateMovie', async ()  => {
    axios.put.mockImplementationOnce(() => Promise.resolve(data, searchType, sortBy));
    const dispatch = jest.fn();
    const fetchMovies = jest.fn();
    const result = await updateMovie(data, searchType, sortBy);
    expect(dispatch(fetchMovies(result)));
  });

  it('getMovieById', async (id) => {
    const store = mockStore({});
    await store.dispatch(getMovieById(id))
      .then((response)=>{
        expect(store.getActions()).toEqual(updateMovieInList(response))
      })
  })

});

















