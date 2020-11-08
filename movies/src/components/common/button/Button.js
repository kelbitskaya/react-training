import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const {
    className, title, handleClick, type,
  } = props;

  return (
    <button className={className} type={type} onClick={handleClick}>
      {title}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  handleClick: ()=>{},
  type: 'button',
};
