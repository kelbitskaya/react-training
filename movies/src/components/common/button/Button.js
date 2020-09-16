import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    className, title, handleClick, type,
  } = props;
  const buttonType = type || 'button';
  return (
    <button className={className} type={buttonType} onClick={handleClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
