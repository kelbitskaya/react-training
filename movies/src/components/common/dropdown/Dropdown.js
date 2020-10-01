import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Dropdown(props) {
  const { options, updateMovies } = props;
  const [selectedItem, setSelectedItem] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const toggleDropdown = () => {
    setActiveItem(!activeItem);
  };

  const handleClick = (index) => {
    setSelectedItem(index);
    setActiveItem(!activeItem);
    if (updateMovies) {
      updateMovies(options[selectedItem]);
    }
  };

  const renderOptions = () => {
    return options.map((item, index) => (
      <li
        role="presentation"
        key={item.id}
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
