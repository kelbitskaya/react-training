import React from 'react';
import Filters from './Filters';

const props = {
  updateMovies: jest.fn()
};


describe("should render Filter component", ()=>{
  it("should contain .filters wrapper", ()=> {
    const component = shallow(<Filters {...props}/>);
    const wrapper = component.find(".filters");
    expect(wrapper.length).toBe(1);
  });
});


