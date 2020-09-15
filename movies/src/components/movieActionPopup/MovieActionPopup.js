import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CloseButton from '../closeButton/CloseButton';

export default function MovieActionPopup(props) {
  const {
    handleClose, isOpen, title, message,
  } = props;
  return (
    <Modal
      isOpen={isOpen}
      className="modal modal-confirmation"
      overlayClassName="modal-overlay"
      onRequestClose={handleClose}
      houldCloseOnOverlayClick={false}
    >
      <div className="modal-content">
        <CloseButton handleClose={handleClose} />
        <h3>{title}</h3>
        <p className="modal-confirmation__text">{message}</p>
      </div>
    </Modal>
  );
}

MovieActionPopup.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
