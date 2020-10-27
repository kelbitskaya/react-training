import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CloseButton from '../closeButton/CloseButton';
import Button from '../common/button/Button';
import Input from '../common/input/Input';
import Dropdown from '../common/dropdown/Dropdown';
import Datepicker from '../common/datepicker/Datepicker';
import Constants from '../constants';
import MovieActionPopup from '../movieActionPopup/MovieActionPopup';
import { editMoviesList } from '../../store/actions/actions'

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMovies: editMoviesList}, dispatch)
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
};

const MovieEditPopup = (props) => {
  const {
    movies,
    title,
    releaseDate,
    url,
    id,
    overview,
    runtime,
    handleClose,
    isOpen,
    updateMovies
  } = props;
  const [isMovieAction, isMovieActionPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

//    isMovieActionPopup(true);
    const  form = e.target.parentElement.parentElement;
    editMovieInfo(form.dataset.movieId, form);
    const formElements = Array.from(form.querySelectorAll('[data-type-form]'));
    const title = `${formElements[0].value} 123`;


    handleClose(title);
  };

  const editMovieInfo = (movieId, form)=> {
    const state = movies;
    const movieList = movies.data;

    const formElements = Array.from(form.querySelectorAll('[data-type-form]'));
    const title = `${formElements[0].value} 123`;

    let selectedElemId = null;
    const selectedElem = movieList.find((item, index)=> {

      if(item.id === +movieId) {
        selectedElemId = index;
        return item;
      }
    });

    movies.data[selectedElemId].title = title;

    updateMovies(movies);
    handleClose();
  };

  const handleInputChange = (e) => {
    console.log(e.target)
  };

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
        <form data-movie-id={id} >
          <p className="modal-title">Edit Movie</p>
          <div>
            <p className="modal-label-text">Movie ID</p>
            <p>{id}</p>
            <Input
              id="movie-title"
              title="Title"
              labelClassName="input-label"
              name='title'
              value={title}
              dataTypeForm='edit'
              handleInputChange={(e)=> handleInputChange(e)}
            />
            <Datepicker
              id="movie-release"
              title="Release date"
              labelClassName="input-label"
              value={releaseDate}
              dataTypeForm='edit'
            />
            <Input
              id="movie-url"
              title="Movie url"
              labelClassName="input-label"
              dataTypeForm='edit'
              value={url}
            />
            <div className="modal-dropdown">
              <span className="modal-label-text">Genre</span>
              <Dropdown options={Constants.GENRE} dataTypeForm='edit' />
            </div>
            <Input
              id="movie-overview"
              title="overview"
              labelClassName="input-label"
              value={overview}
              data-type-form='edit'
            />
            <Input
              id="movie-runtime"
              title="runtime"
              labelClassName="input-label"
              value={runtime}
              dataTypeForm='edit'
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
              handleClick={handleSubmit}

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


export default connect(mapStateToProps, matchDispatchToProps)(MovieEditPopup);
