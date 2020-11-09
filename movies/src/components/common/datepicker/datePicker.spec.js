import React from 'react';
import rerender from 'react-test-renderer';
import DatePicker from './DatePicker';

const props = {
  className: ''
};

describe('DatePicker component', () => {
  let onChange;
  let setFieldValue;

  beforeEach(()=>{
    onChange = jest.fn();
    setFieldValue = jest.fn();
  });

  test('DatePicker layout', () => {
    const component = rerender.create(<DatePicker {...props} onChange={onChange}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
