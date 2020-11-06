import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from "react-router";

export default function Dropdown(props) {
  const { options, updateMovies } = props;
  const [selectedItem, setSelectedItem] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  let location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sortBy = params.get('sortBy');
    const index = options.reduce((p,c,i) => {return c.title === sortBy ?i:p}, 0);
    setSelectedItem(index);
  });


  const toggleDropdown = () => {
    setActiveItem(!activeItem);
  };

  const handleClick = (index) => {
    setSelectedItem(index);
    setActiveItem(!activeItem);
    if (updateMovies) {
      updateMovies(options[index]);
    }
  };

  const renderOptions = () => {
    return options.map((item, index) => (
      <li
        role="presentation"
        key={item.id}
        datatype={item.type}
        className="dropdown-content__item"
        onClick={() => handleClick(index)}
        onKeyDown={() => handleClick(index)}
        type="button"
      >
        {item.title}
      </li>
    ));
  };

  return (
    <div className="dropdown">
      <button
        className={`dropbtn ${(activeItem ? 'dropbtn__open' : '')}`}
        type="button"
        onClick={() => toggleDropdown()}
      >
        {options[selectedItem].title}
      </button>
      <ul
        className={`dropdown-content ${(activeItem ? 'dropdown-content__shown' : '')}`}
      >
        {renderOptions()}
      </ul>
    </div>
  )
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
  updateMovies: PropTypes.func.isRequired,
};
