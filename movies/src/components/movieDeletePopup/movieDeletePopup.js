import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CloseButton from '../closeButton/CloseButton';
import Button from '../common/button/Button';

export default function MovieDeletePopup(props) {
  const { handleClose, isOpen } = props;
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
        <h3>DELETE MOVIE</h3>
        <p className="modal-confirmation__text">Are you sure you want to delete this movie?</p>
        <div className="modal-buttons-wrap">
          <Button
            className="button button_primary"
            title="CONFIRM"
            type="button"
            handleClick={() => {}}
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
