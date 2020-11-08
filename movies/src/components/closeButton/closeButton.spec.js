import React from 'react';
import CloseButton from './CloseButton';

const props = {
  handleClose: ()=>{},
};

const setUp = (props) => shallow(<CloseButton {...props}/>);

describe("CloseButton component", () => {
  describe("has props", () => {
    const component = setUp(props);
    it("should render CloseButton component", ()=> {
      const button = component.find("button");
      expect(button).toHaveLength(1);
    });
  });
});
