import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CloseButton from '../closeButton/CloseButton';
import Button from '../common/button/Button';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {editMoviesList} from "../../store/actions/actions";
import store from '../../store/store'

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMovies: editMoviesList}, dispatch)
};

const MovieDeletePopup = (props) => {
  const { handleClose, isOpen, id, updateMovies } = props;

  Modal.setAppElement(document.getElementById('root'));

  const deleteMovie = (e) => {
    const state = store.getState();
    const movieList = state && state.movies && state.movies.data;
    state.movies.data = movieList.filter(movie => movie.id !== id);
    updateMovies(state.movies);
    handleClose();
  };


  return (
    <Modal
      isOpen={isOpen}
      className="modal modal-confirmation"
      overlayClassName="modal-overlay"
      onRequestClose={handleClose}
      houldCloseOnOverlayClick={false}
    >
      <div className="modal-content" data-movie-id={id}>
        <CloseButton handleClose={handleClose} />
        <h3>DELETE MOVIE</h3>
        <p className="modal-confirmation__text">Are you sure you want to delete this movie?</p>
        <div className="modal-buttons-wrap">
          <Button
            className="button button_primary"
            title="CONFIRM"
            type="button"
            handleClick={deleteMovie}
          />
        </div>
      </div>
    </Modal>
  );
}

MovieDeletePopup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};


export default connect(null, matchDispatchToProps)(MovieDeletePopup);
