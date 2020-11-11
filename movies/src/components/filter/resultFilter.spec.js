import React from 'react';
import ResultFilter from './ResultFilter';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import rerender from "react-test-renderer";
import routeData from "react-router";

const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};

describe("ResultFilter component", () => {
  beforeEach(()=>{
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });

  test("should render ResultFilter component", ()=> {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    const component = rerender.create(
      <Provider store={store}>
        <ResultFilter/>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ResultFilter has genre-filter ', () => {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    const component = mount(
      <Provider store={store}>
        <ResultFilter/>
      </Provider>);

    const button = component.find(".genre-filter");
    expect(button.length).toBe(1);

  });
});
