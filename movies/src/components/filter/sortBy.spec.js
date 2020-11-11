import React from 'react';
import SortBy from './SortBy';
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

describe("SortBy component", () => {
  beforeEach(()=>{
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });

  test("should render SortBy component", ()=> {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    const component = rerender.create(
      <Provider store={store}>
        <SortBy/>
      </Provider>
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('SortBy has dropdown ', () => {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    const component = mount(
      <Provider store={store}>
        <SortBy/>
      </Provider>);

    const button = component.find(".dropdown");
    expect(button.length).toBe(1);
  });

});
