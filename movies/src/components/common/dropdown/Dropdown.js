import React from 'react';
import PropTypes from 'prop-types';

export default function Dropdown(props) {
  const { options } = props;
  return (
    <div className="dropdown">
      <button className="dropbtn" type="button">{options[0]}</button>
      <div className="dropdown-content">
        {options.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.string.isRequired,
};
