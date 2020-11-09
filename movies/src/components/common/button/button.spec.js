import React from 'react';
import Button from './Button';

const props = {
  className: "class",
  title: "title",
  handleClick: ()=>{},
  type: "button",
};

const setUp = (props) => shallow(<Button {...props}/>);


describe("Button component", () => {
  describe("has props", () => {
    const component = setUp(props);
    it("should render Button component", ()=> {
      const button = component.find("button");
      expect(button).toHaveLength(1);
    });
  });

  describe("defaultProps", () => {
    it("should use default handleClick", ()=> {
     const result = Button.defaultProps.handleClick();
      expect(result).toBe(undefined);
    });
  });
});
