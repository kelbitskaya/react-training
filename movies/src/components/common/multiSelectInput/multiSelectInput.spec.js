import React from 'react';
import rerender from 'react-test-renderer';
import MultiSelectInput from './MultiSelectInput';
import Constants from '../../constants';

const props = {
  defaultValues: {
    split: ()=>{},
  },
  name: 'select',
  id: 'genres',
  selected: ['Comedy'],
  options: Constants.GENRE,
  selectedElements: [],
  getArrayValues: jest.fn(),
};

describe('MultiSelectInput', () => {
  test('then snapshot created', () => {
    const component = rerender.create(
      <MultiSelectInput
        {...props}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
