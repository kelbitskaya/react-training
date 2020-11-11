import React from 'react';
import Header from './Header';
import { Provider } from "react-redux";
import { createMockStore } from 'redux-test-utils';
import rerender from "react-test-renderer";
import routeData from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';

let store = createMockStore('');
const resetStore = () => store = createMockStore({
  movie: {
    length: 11
  }
});

const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};

const props = {
  movie1: {
    length: 1,
    title: "",
    src: "",
    id: "",
    poster_path: "",
    releaseDate: "",
    vote_average: "",
    url: "",
    overview: "",
    runtime: "",
    description: "",
    year: 1,
    rating: 1,
    genre: [],
    selectMovie: jest.fn(),
    map: jest.fn(),
    isSubmitting: jest.fn(),
  },
  movie: {
    length: 11
  }
};

describe("should render Header component", ()=>{
  it("Header", ()=> {
    resetStore();
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
    const component = rerender.create(
      <Provider store={store}>
        <Router>
          <Header {...props}/>
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
