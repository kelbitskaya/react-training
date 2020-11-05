import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './auxiliary/ErrorBoundary';
import HomePage from "../pages/HomePage";
import NotFoundedPage from "../pages/NotFoundedPage";
import store from '../store/store'

export default function App() {

  console.info(store.getState());

  return (
    <ErrorBoundary>
        <BrowserRouter>
            <Switch>
              <Route path={["/", "/search/*", "/film/:id", "/home"]} component={HomePage} />
              <Route path="*" component={NotFoundedPage} />
            </Switch>
        </BrowserRouter>
    </ErrorBoundary>
  );
}
