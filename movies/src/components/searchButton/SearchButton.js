import React from 'react';
import PropTypes from 'prop-types';

export default function SearchButton(props) {
  const { goHomePage } = props;
  return (
    <div className="App">
      <button className="button_search-icon" onClick={()=> goHomePage(0)} aria-label="search"/>
    </div>
  );
}

SearchButton.propTypes = {
  goHomePage: PropTypes.func.isRequired,
};
