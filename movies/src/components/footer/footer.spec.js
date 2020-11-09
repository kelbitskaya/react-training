import React from 'react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Footer component", ()=>{
  it("should render Footer component", ()=> {
    const component = render(
      <Router>
        <Footer />
      </Router>
      );
    expect(component).toMatchSnapshot();
  });
});
