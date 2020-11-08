import React from 'react';
import { useDispatch, Provider } from 'react-redux';
import { Formik } from 'formik';
import store from '../store/store';
import AddMovie from '../components/addMovie/AddMovie';
//
// const props = {
//   handleClose: ()=>{},
//   updateMovies: ()=>{},
// };
//
// const setUp = (props) => shallow(<AddMovie store={store} {...props}/>);
//
// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//   useDispatch: () => mockDispatch
// }));
//
// jest.mock('react', () => ({
//   useState: initial => [initial, mockSetState]
// }));
//
// describe("AddMovie component", () => {
//   let component;
//   let instance;
//
//   beforeEach(()=>{
//     component = setUp();
//     instance = component.instance();
//   });
//
//   it("should render AddMovie component", ()=> {
//     const mockedDispatch = jest.fn();
//     useDispatch.mockReturnValue(mockedDispatch);
//     expect(component).toMatchSnapshot();
//
//   });
//
//   it("should render AddMovie component", ()=> {
//     expect(component).toMatchSnapshot();
//   });
// });

const props = {
  handleClose: ()=>{},
  updateMovies: ()=>{},
  isSubmitting: ()=>{},
  handleChange: ()=>{},
  handleBlur: ()=>{},
  handleSubmit: ()=>{},
  state: {
    movies: {
      data: [],
    }
  },
  values: {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
  },
  errors: {
    title: '',
    poster_path: '',
    overview: '',
    runtime: '',
    release_date: '',
  },
};

const setUp = (props) => mount(
  <Provider store={store}>
    <AddMovie{...props} />
  </Provider>
  );

describe('AddMovie component', () => {
  //   beforeEach(()=>{
//     component = setUp();
//     instance = component.instance();
//   });
  test('should update title field on change', () => {
    const tree = setUp(props);

    const titleInput = tree.find("input[name='title']");

    titleInput.simulate('change', {
      persist: () => {},
      target: {
        name: 'title',
        value: 'newTitle'
      }
    });

    expect(titleInput.html()).toMatch('newTitle');
  });
});
