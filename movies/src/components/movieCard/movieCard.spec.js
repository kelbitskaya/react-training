import React from 'react';
import MovieCard from './MovieCard';
import {Provider} from "react-redux";
import { createMockStore } from 'redux-test-utils';
import rerender from "react-test-renderer";
import routeData from "react-router";

let store = createMockStore('');
const resetStore = () => store = createMockStore('');

const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};

const props = {
  title: '',
  genre: [],
  year: 123,
  src: '',
  id: '',
  releaseDate: "123",
  url: '',
  overview: '',
  runtime: '123',
  selectMovie: jest.fn(),
  description: '',
  rating: 123,
  getMovie: jest.fn(),
  isSubmitting: jest.fn(),

};

describe("should render MovieCard component", ()=>{
  beforeEach(() => {
    resetStore();
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });
  it("should contain movie-card wrapper", ()=> {
    const component = rerender.create(
      <Provider store={store}>
        <MovieCard {...props} />
      </Provider>
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


