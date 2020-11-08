import React from 'react';
import Logo from '../components/common/Logo';

describe("Logo component", ()=>{
  it("should render Logo component", ()=> {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
