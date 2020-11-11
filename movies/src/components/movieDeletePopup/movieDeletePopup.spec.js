import React from 'react';
import rerender from 'react-test-renderer';
import movieDeletePopup from './movieDeletePopup';
import routeData from 'react-router';
import Modal from 'react-modal';

const mockLocation = {
  pathname: '/welcome',
  hash: '',
  search: '',
  state: ''
};

const props = {
  handleClose: jest.fn(),
  isOpen: true,
  id: "1",
  updateMovies : jest.fn(),
};

describe('movieDeletePopup', () => {
  beforeEach(()=>{
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
  });


  it('movieDeletePopup', () => {
    const component = rerender.create(<movieDeletePopup {...props}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
