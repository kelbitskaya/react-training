import React from 'react';
import rerender from 'react-test-renderer';
import Dropdown from './Dropdown';
import routeData from 'react-router';

const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};

const props = {
  options: [
    {
      title: "",
      value: "",
      id: new Date(),
      handleClick: jest.fn()
    }
  ],
  updateMovies: jest.fn(),
  toggleDropdown : jest.fn(),
};

describe('Dropdown', () => {
  beforeEach(()=>{
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });

  it('toggleDropdown ', () => {
    const component = shallow(<Dropdown  {...props}/>);
    component.toggleDropdown = jest.fn();
    const dropdown = component.find('.dropbtn');
    dropdown.simulate('click');
    expect(dropdown.hasClass("dropbtn__open")).toEqual(false);
  });

  it('handleClick with click', () => {
    const component = shallow(<Dropdown  {...props}/>);
    component.handleClick = jest.fn();
    const dropdown = component.find('.dropdown-content__item');
    dropdown.simulate('click');
    expect(dropdown.handleClick).toBeUndefined();
  });

  it('handleClick with key down', () => {
    const component = shallow(<Dropdown  {...props}/>);
    component.handleClick = jest.fn();
    const dropdown = component.find('.dropdown-content__item');
    dropdown.simulate('keydown');
    expect(dropdown.handleClick).toBeUndefined();
  });

  it('Dropdown', () => {
    const component = rerender.create(
      <Dropdown
        {...props}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
