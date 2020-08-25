import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button/Button';

export default function Search(props) {
  const { placeholder } = props;
  return (
    <form className="movie-search__line">
      <input type="text" name="movie" className="movie-search__input" placeholder={placeholder} />
      <Button className="button button_search" title="Search" />
    </form>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
