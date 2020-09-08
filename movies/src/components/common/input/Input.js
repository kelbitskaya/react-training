import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { id, title, labelClassName, value } = props;

  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        <span className="modal-label-text">{title}</span>
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
  labelClassName: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
