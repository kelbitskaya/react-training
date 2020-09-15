import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import Dropdown from '../common/dropdown/Dropdown';
import Datepicker from '../common/datepicker/Datepicker';
import CloseButton from '../closeButton/CloseButton';
import MovieActionPopup from '../movieActionPopup/MovieActionPopup';
import Constants from '../constants';

export default function AddMovie(props) {
  const [isMovieAction, isMovieActionPopup] = useState(false);
  const { handleClose } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    isMovieActionPopup(true);
  };

  return (
    <>
      <CloseButton handleClose={handleClose} />
      <form onSubmit={handleSubmit}>
        <p className="modal-title">Add Movie</p>
        <Input
          id="movie-title"
          title="Title"
          labelClassName="input-label"
        />
        <Datepicker
          id="movie-release"
          title="Release date"
          labelClassName="input-label"
          value={this}
        />
        <Input
          id="movie-url"
          title="Movie url"
          labelClassName="input-label"
        />
        <div className="modal-dropdown">
          <span className="modal-label-text">Genre</span>
          <Dropdown options={Constants.GENRE} />
        </div>
        <Input
          id="movie-overview"
          title="overview"
          labelClassName="input-label"
        />
        <Input
          id="movie-runtime"
          title="runtime"
          labelClassName="input-label"
        />
        <div className="add-movie-buttons">
          <Button
            className="button button_secondary"
            title="RESET"
            handleClick={() => {}}
          />
          <Button
            className="button button_primary"
            title="SUBMIT"
            type="submit"
            handleClick={() => {}}
          />
        </div>
      </form>
      <MovieActionPopup
        isOpen={isMovieAction}
        title="CONGRATULATION!"
        message="The movie has been added successfully!"
        handleClose={handleClose}
      />
    </>
  );
}

AddMovie.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
