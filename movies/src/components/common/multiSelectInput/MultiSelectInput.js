import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'react-multi-select-component';

export default function MultiSelectInput(props) {
  const { options } = props;

  const optionsArr = options.map((item, index) => ({ label: item.title, value: index }));
  const [selected, setSelected] = useState([]);

  const onChange = (selectedElements) => {
    setSelected(selectedElements);
  };

  return (
    <MultiSelect
      id="genres"
      options={optionsArr}
      value={selected}
      onChange={onChange}
      hasSelectAll={false}
    />
  );
}

MultiSelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
