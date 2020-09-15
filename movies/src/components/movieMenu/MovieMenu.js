import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../closeButton/CloseButton';

export default function MovieMenu(props) {
  const { deleteMovie, editMovie } = props;
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen
        ? (
          <div className="menu__item" role="presentation" onClick={showMenu}>
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
        )
        : (
          <ul className="dropdown-content dropdown-content__shown">
            <CloseButton handleClose={showMenu} />
            <li role="presentation" className="dropdown-content__item" type="button">
              <button type="button" className="dropdown-content__button" onClick={editMovie}>Edit</button>
            </li>
            <li role="presentation" className="dropdown-content__item" type="button">
              <button type="button" className="dropdown-content__button" onClick={deleteMovie}>delete</button>
            </li>
          </ul>
        )}
    </>
  );
}

MovieMenu.propTypes = {
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};
