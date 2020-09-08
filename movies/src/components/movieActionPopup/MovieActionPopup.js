import React from 'react';
import CloseButton from "../closeButton/CloseButton";
import Modal from 'react-modal';

export default function MovieActionPopup (props) {
  const { handleClose, isOpen, title, message } = props;
  return(
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
