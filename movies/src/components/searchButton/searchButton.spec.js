import React from 'react';
import SearchButton from './SearchButton';
import routeData from "react-router";

const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};

const props = {
  goHomePage: jest.fn(),
  handleSubmit: ()=>{},
  handleChange: ()=>{},
};

const setUp = (props) => shallow(<SearchButton {...props}/>);

describe("Button component", () => {
  beforeEach(()=>{
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
  });

  describe("has props", () => {
    const component = setUp(props);
    test("should render Button component", ()=> {
      const button = component.find("button");
      expect(button).toHaveLength(1);
    });
  });

  test('SearchButton', () => {
    const closeButton = shallow(<SearchButton {...props}  onClick={()=>props.goHomePage()}/>);
    closeButton.find('.button_search-icon').simulate('click');
    closeButton.simulate('click');
    expect(props.goHomePage).toBeCalled();
  });
});
