import React from 'react';
import PropTypes from 'prop-types';

export default function CloseButton(props) {
  const { handleClose } = props;
  return (
      <button
        type="button"
        className="button-close"
        onClick={handleClose}/>
  );

}
CloseButton.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
