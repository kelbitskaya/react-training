import React from 'react';
import NoMovie from './NoMovie';

const setUp = () => shallow(<NoMovie />);

describe("should render noMovie component", ()=>{
  let component;
  beforeEach(()=>{
    component = setUp();
  });
  it("should contain .error-title__wrap wrapper", ()=> {
    const wrapper = component.find(".error-title__wrap");
    expect(wrapper.length).toBe(1);
  });

  it("should contain h1", ()=> {
    const wrapper = component.find("h1");
    expect(wrapper.length).toBe(1);
  });
});


