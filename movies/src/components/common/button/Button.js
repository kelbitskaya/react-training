import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { className, title } = props;
  return (
    <button className={className} type="button">
      {title}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};
