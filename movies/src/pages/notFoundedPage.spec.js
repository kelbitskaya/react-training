import React from 'react';
import NotFoundedPage from './NotFoundedPage';

const setUp = () => shallow(<NotFoundedPage />);

describe("should render noMovie component", ()=>{
  let component;
  beforeEach(()=>{
    component = setUp();
  });
  it("should contain .logo-wrap wrapper", ()=> {
    const wrapper = component.find(".logo-wrap");
    expect(wrapper.length).toBe(1);
  });

  it("should contain content", ()=> {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});


