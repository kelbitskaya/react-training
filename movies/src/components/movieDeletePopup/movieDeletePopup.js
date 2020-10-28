import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CloseButton from '../closeButton/CloseButton';
import Button from '../common/button/Button';
import {editMoviesList} from "../../store/actions/actions";

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMovies: editMoviesList}, dispatch)
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
};

const MovieDeletePopup = (props) => {
  const { handleClose, isOpen, id, updateMovies, movies } = props;

  Modal.setAppElement(document.getElementById('root'));

  const deleteMovie = () => {
    const movieList = movies.data;
    movies.data = movieList.filter(movie => movie.id !== id);
    updateMovies(movies);
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
};

MovieDeletePopup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  updateMovies: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  movies: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
        filter: PropTypes.func.isRequired,
      }))
  }).isRequired,
};


export default connect(mapStateToProps, matchDispatchToProps)(MovieDeletePopup);
