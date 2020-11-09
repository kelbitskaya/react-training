// import React from 'react';
// import CloseButton from './CloseButton';
//
// const props = {
//   handleClose: ()=>{},
// };
//
// const setUp = (props) => shallow(<CloseButton {...props}/>);
//
// describe("CloseButton component", () => {
//   describe("has props", () => {
//     const component = setUp(props);
//     it("should render CloseButton component", ()=> {
//       const button = component.find("button");
//       expect(button).toHaveLength(1);
//     });
//   });
// });

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
