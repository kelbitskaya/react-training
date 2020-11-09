import React from 'react';
import Logo from './Logo';

describe("Logo component", ()=>{
  it("should render Logo component", ()=> {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
