import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const {
    id, title, labelClassName, value, dataTypeForm, handleInputChange, name
  } = props;

  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        <span className="modal-label-text">{title}</span>
        <input
          type="text"
          id={id}
          className="input"
          value={value}
          name={name}
          data-type-form={dataTypeForm}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  labelClassName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
