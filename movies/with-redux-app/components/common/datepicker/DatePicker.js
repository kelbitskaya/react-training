import React from "react";
import { useField, useFormikContext } from "formik";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      /* eslint-disable react/jsx-props-no-spreading */
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
      className={props.className}
    />
  );
};

DatePickerField.propTypes = {
  className: PropTypes.string.isRequired,
};

export default DatePickerField;
