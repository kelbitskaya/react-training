import React from 'react';
import PropTypes from 'prop-types';

export default function Datepicker(props) {
  const {
    id, title, value, name
  } = props;

  return (
    <label htmlFor={id}>
      {title}
      <input
        className="input"
        id={id}
        type="date"
        defaultValue={value}
        name={name}
      />
    </label>
  );
}

Datepicker.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
