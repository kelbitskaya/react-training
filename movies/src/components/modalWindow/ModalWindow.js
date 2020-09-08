import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default function ModalWindow(props) {
  const { isOpen, modalContent } = props;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          {modalContent}
        </div>
      </Modal>
    </div>
  );
};

ModalWindow.propTypes = {
  modalContent: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

