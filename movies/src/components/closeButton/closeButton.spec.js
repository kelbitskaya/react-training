import React from 'react';
import rerender from 'react-test-renderer';
import CloseButton from './CloseButton';

describe('CloseButton component', () => {
  let handleClose;
  beforeEach(()=>{
    handleClose = jest.fn();
  });
  test('CloseButton layout', () => {
    const component = rerender.create(<CloseButton handleClose={handleClose}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CloseButton', () => {
    const closeButton = shallow(<CloseButton  handleClose={handleClose}/>);
    closeButton.find('.button-close').simulate('click');
    closeButton.simulate('click');
    expect(handleClose).toBeCalled();
  });

});
