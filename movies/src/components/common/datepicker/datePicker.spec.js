import React from 'react';
import rerender from 'react-test-renderer';
import DatePicker from './DatePicker';
import { Formik, Field } from "formik";

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
    const component = rerender.create(
      <Formik>
        <Field>
          <DatePicker {...props} onChange={onChange}/>
        </Field>
      </Formik>
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
