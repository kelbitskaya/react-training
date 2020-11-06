import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { Formik } from "formik";
import Button from '../common/button/Button';
import { fetchMovies } from '../../store/actions/actions';

const matchDispatchToProps = { updateMovies: fetchMovies };

const Search = ({ updateMovies } ) => {

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    const sortBy = params.get('sortBy');
    const filter = params.get('sortBy');
    updateMovies(sortBy, filter, q);
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
};

Search.propTypes = {
  updateMovies: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Search.defaultProps = {
  values: {
    title: ''
  },
  handleSubmit: ()=>{},
  handleChange: ()=>{},
};

export default connect(null, matchDispatchToProps)(Search);
