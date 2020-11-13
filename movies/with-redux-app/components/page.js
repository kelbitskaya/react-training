import React from 'react';
import App from '../components/app'
import axios from "axios";
import {fetchMoviesSuccess} from "../store/actions/actions";
import withRedux from "next-redux-wrapper";
import {createStore} from "redux";
import reducer from '../store/reducers/reducers'

const makeStore = (initialState) => {
  return createStore(reducer, initialState);
};


const Page =() => {
  return (
    <App/>
  )
};


Page.getInitialProps = async (ctx) => {
  const response = await axios.get('http://localhost:4000/movies');
  ctx.store.dispatch(fetchMoviesSuccess(response.data));
  return response;
};


export default withRedux(makeStore)(Page);
