import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  const { className, title } = props;
  return (
    <button className={className} type="button">
      {title}
    </button>
  );
}

Form.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};
