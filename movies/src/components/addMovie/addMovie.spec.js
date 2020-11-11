import React from "react";
import AddMovie from "./AddMovie";
import rerender from "react-test-renderer";
import { Provider } from "react-redux";
import {addMovie} from "../../store/actions/actions";
import configureStore from "redux-mock-store";

const props = {
  handleClose: ()=>{},
  updateMovies: jest.fn(),
  isSubmitting: ()=>{},
  handleChange: ()=>{},
  handleBlur: ()=>{},
  handleSubmit: ()=>{},

  state: {
    movies: {
      data: [],
    }
  },
  values: {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
  },
  errors: {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
    release_date: '',
  },
};

describe("AddMovie", () => {

  const handleClose = jest.fn();

  test("AddMovie snapshot", () => {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const onSubmit = store.dispatch((values) => addMovie(values));
    const component = rerender.create(
      <Provider store={store}>
        <AddMovie
                {...props}
                handleClose={handleClose}
                onSubmit={onSubmit} />
      </Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
