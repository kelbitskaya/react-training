import React from 'react';
import ErrorBoundary from './auxiliary/ErrorBoundary';
import Header from './header/Header';
import Footer from './footer/Footer';
import MovieList from './movieList/MovieList';
import Filters from './filter/Filters';

export default function App() {
  return (
    <ErrorBoundary>
      <Header />
      <div className="content">
        <Filters />
        <MovieList />
      </div>
      <Footer />
    </ErrorBoundary>
  );
}
