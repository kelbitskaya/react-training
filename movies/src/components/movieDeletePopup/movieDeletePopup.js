import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {useLocation} from "react-router";
import {connect} from "react-redux";
import CloseButton from '../closeButton/CloseButton';
import Button from '../common/button/Button';
import {deleteMovie} from "../../store/actions/actions";

const matchDispatchToProps = {updateMovies: deleteMovie};

const MovieDeletePopup = (props) => {
  const { handleClose, isOpen, id, updateMovies } = props;
  let location = useLocation();

  Modal.setAppElement(document.getElementById('root'));

  const removeMovieFromList = () => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    updateMovies(id, q);
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
            handleClick={removeMovieFromList}
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
};


export default connect(null, matchDispatchToProps)(MovieDeletePopup);
