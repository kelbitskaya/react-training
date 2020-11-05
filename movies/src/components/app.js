import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './auxiliary/ErrorBoundary';
import HomePage from "../pages/HomePage";
import NotFoundedPage from "../pages/NotFoundedPage";

export default function App() {
  return (
    <ErrorBoundary>
        <BrowserRouter>
            <Switch>
              <Route exact path={["/", "/search", "/film/:id", "/home"]} component={HomePage} />
              <Route exact path="*" component={NotFoundedPage} />
            </Switch>
        </BrowserRouter>
    </ErrorBoundary>
  );
}
