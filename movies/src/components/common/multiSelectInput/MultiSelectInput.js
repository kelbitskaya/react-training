import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'react-multi-select-component';

export default function MultiSelectInput(props) {
  const { options } = props;

  const optionsArr = useMemo(()=> options.map((item, index) => ({ label: item.title, value: index })), [options]);
  const [selected, setSelected] = useState([]);
  const [values, setValuse] =useState('');

  const onChange = useCallback((selectedElements) => {
    setSelected(selectedElements);
    getArrayValues(selectedElements)

  }, []);

  const getArrayValues = (selectedElements) => {
    const resultString = selectedElements.map(item=>item.label).join(', ');
    setValuse(resultString)
  };

  return (
    <>
    <MultiSelect
      id="genres"
      options={optionsArr}
      value={selected}
      onChange={onChange}
      hasSelectAll={false}
      selected={selected}
      name='select'
      dataSelect={selected}
    />
      <input type="text" value={values} name="genres" className='hidden-input'/>
    </>
  );
}

MultiSelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
