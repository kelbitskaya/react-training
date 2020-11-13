import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Button from '../common/button/Button';
import { fetchMovies } from '../../store/actions/actions';

const Search = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (router.asPath === '/') {
      setTerm('');
    }
  }, [router.asPath]);

  const handleSearch = (e) => {
    e.preventDefault();
    Router.push(term === '' ? '/' : `/search/${term}`);
    dispatch(fetchMovies('', '', term));
  };
  const handleSearchTerm = (e) => {
    setTerm(e.target.value);
  };

  return (

    <form className="movie-search__line" onSubmit={(e) => handleSearch(e)}>
      <input
        id='title'
        placeholder="What do you want to watch?"
        type="text"
        className="movie-search__input"
        onChange={(e) => handleSearchTerm(e)}/>
      <Button type="submit" className="button button_search" title="Search" />
    </form>

  );
};

Search.propTypes = {
  updateMovies: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.shape({
    title: PropTypes.string,
  }),
};


export default Search;
