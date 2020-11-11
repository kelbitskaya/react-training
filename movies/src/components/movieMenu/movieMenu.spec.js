import React from 'react';
import rerender from 'react-test-renderer';
import MovieMenu from './MovieMenu';

const props = {
  editMovie: jest.fn(),
  deleteMovie: jest.fn(),
  isOpen: true
};

describe("should render MovieMenu component", ()=>{
  it("should contain menu__item wrapper", ()=> {
    const component = rerender.create(<MovieMenu {...props}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


