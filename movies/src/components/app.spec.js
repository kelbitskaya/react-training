import React from "react";
import App from "./app";
import rerender from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("App", () => {
  test("App snapshot", () => {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    const component = rerender.create(
      <Provider store={store}>
        <App />
      </Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
