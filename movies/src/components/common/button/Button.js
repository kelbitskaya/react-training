import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { className, title, handleClick } = props;
  return (
    <button className={className} type="button" onClick={handleClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
