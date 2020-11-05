import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from "formik";
import Button from '../common/button/Button';
import { fetchMovies } from '../../store/actions/actions';
import {withRouter} from "react-router";

const matchDispatchToProps = { updateMovies: fetchMovies };

const Search = withRouter(({ history, location, updateMovies } ) => {

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    console.log(params);
    const q = params.get('q');
    updateMovies('', '', q);
    console.log(q);
  }, []);

  return (
    <Formik
      initialValues={{ title: ""}}
      onSubmit={(values) => {
        updateMovies('', '', values.title);
        history.push(`/search?q=${values.title}&searchBy=title`);
      }}
    >
      {props => {
        const {
          values,
          handleChange,
          handleSubmit
        } = props;
        return (
    <form className="movie-search__line" onSubmit={handleSubmit}>
      <input
        id='title'
        placeholder="What do you want to watch?"
        type="text"
        value={values.title}
        className="movie-search__input"
        onChange={handleChange}/>
      <Button type="submit" className="button button_search" title="Search" />
    </form>
        );
      }}
    </Formik>
  );
});

Search.propTypes = {
  updateMovies: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
}).isRequired,
};

export default connect(null, matchDispatchToProps)(Search);
