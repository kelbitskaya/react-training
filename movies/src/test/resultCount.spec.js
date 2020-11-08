import React from 'react';
import ResultCount from '../components/resultCount/ResultCount';

describe("ResultCount component", ()=>{
  it("should render ResultCount with props", ()=> {
    const component = shallow(<ResultCount count={1} />);
    expect(component).toMatchSnapshot();
  });
});
