import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { id, title, className, value } = props;

  return (
    <>
      <label htmlFor={id} className={className}>
        {title}
        <input
          type="text"
          id={id}
          className="input"
          value={value}
        />
      </label>
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
