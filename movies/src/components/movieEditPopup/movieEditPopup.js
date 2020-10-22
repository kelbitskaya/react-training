import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CloseButton from '../closeButton/CloseButton';
import Button from '../common/button/Button';
import Input from '../common/input/Input';
import Dropdown from '../common/dropdown/Dropdown';
import Datepicker from '../common/datepicker/Datepicker';
import Constants from '../constants';
import MovieActionPopup from '../movieActionPopup/MovieActionPopup';
import { editMoviesList } from '../../store/actions/actions'
import store from '../../store/store'

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({editMovieInfo: editMoviesList}, dispatch)
};

const MovieEditPopup = (props) => {
  const {
    title,
    releaseDate,
    url,
    id,
    overview,
    runtime,
    handleClose,
    isOpen,
    editingMovie,
  } = props;
  const [isMovieAction, isMovieActionPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    isMovieActionPopup(true);
    editMovieInfo(e.target.dataset.movieId)
  };

  const editMovieInfo = useCallback((movieId)=> {
    editingMovie(movieId);
    console.info(store.getState());
  });

  return (
    <Modal
      isOpen={isOpen}
      className="modal"
      overlayClassName="modal-overlay"
      onRequestClose={handleClose}
      houldCloseOnOverlayClick={false}
    >
      <div className="modal-content">
        <CloseButton handleClose={handleClose} />
        <form onSubmit={handleSubmit} data-movie-id={id} >
          <p className="modal-title">Edit Movie</p>
          <div>
            <p className="modal-label-text">Movie ID</p>
            <p>{id}</p>
            <Input
              id="movie-title"
              title="Title"
              labelClassName="input-label"
              value={title}
            />
            <Datepicker
              id="movie-release"
              title="Release date"
              labelClassName="input-label"
              value={releaseDate}
            />
            <Input
              id="movie-url"
              title="Movie url"
              labelClassName="input-label"
              value={url}
            />
            <div className="modal-dropdown">
              <span className="modal-label-text">Genre</span>
              <Dropdown options={Constants.GENRE} />
            </div>
            <Input
              id="movie-overview"
              title="overview"
              labelClassName="input-label"
              value={overview}
            />
            <Input
              id="movie-runtime"
              title="runtime"
              labelClassName="input-label"
              value={runtime}
            />
          </div>

          <div className="add-movie-buttons">
            <Button
              className="button button_secondary"
              title="RESET"
              handleClick={handleClose}
            />
            <Button
              className="button button_primary"
              title="SAVE"
              type="submit"
              handleClick={editMoviesList}
            />
          </div>
        </form>
        <MovieActionPopup
          isOpen={isMovieAction}
          title="CONGRATULATION!"
          message="The movie has been added successfully!"
          handleClose={handleClose}
        />
      </div>
    </Modal>
  );
}

MovieEditPopup.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};


export default connect(null, matchDispatchToProps)(MovieEditPopup);
