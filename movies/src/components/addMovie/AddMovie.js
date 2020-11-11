import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import MultiSelectInput from '../common/multiSelectInput/MultiSelectInput';
import CloseButton from '../closeButton/CloseButton';
import MovieActionPopup from '../movieActionPopup/MovieActionPopup';
import Constants from '../constants';
import { addMovie } from "../../store/actions/actions";
import  DatePicker from "../common/datepicker/DatePicker";

const AddMovie = ({ handleClose }) => {
  const [isMovieAction, isMovieActionPopup] = useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(addMovie());
  }, []);

  return (
    <>
      <CloseButton handleClose={handleClose} />
      <p className="modal-title">Add Movie</p>
      <Formik
        initialValues={{ title: "", release_date: "", poster_path: "", overview: "", runtime: ""}}
        onSubmit={(values) => {
          const fromValues = values;
          fromValues.runtime = +fromValues.runtime;
          dispatch(addMovie(fromValues));
          isMovieActionPopup(!isMovieAction);
        }}

        validationSchema={Yup.object().shape({
          title: Yup.string()
            .required("Required"),
          poster_path:  Yup.string()
            .required("Required"),
          overview:  Yup.string()
            .required("Required"),
          release_date:  Yup.string()
            .required("Required"),
          runtime:  Yup.number()
            .required("Required"),
        })}
      >
        {props => {
          const {
            errors,
            isSubmitting,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="title" className="input-label">
                <span className="modal-label-text">Title</span>
                <Field name="title">
                  {({ field }) => (
                    <input
                      {...field}
                      id="title"
                      placeholder="Enter movie title"
                      type="text"
                      className={
                        errors.title
                          ? "input error"
                          : "input"
                      }/>
                  )}
                </Field>
                {errors.title && (
                  <div className="input-feedback">{errors.title}</div>
                )}
              </label>

              <label htmlFor="release_date" className="input-label">
                <span className="modal-label-text">RELEASE DATE</span>
                <DatePicker
                  name="release_date"
                  className={
                    errors.release_date
                      ? "input myClass error"
                      : "input myClass"
                  }/>
                {errors.release_date && (
                  <div className="input-feedback">{errors.release_date}</div>
                )}
              </label>

              <label htmlFor="poster_path" className="input-label">
                <span className="modal-label-text">MOVIE URL</span>
                <Field name="poster_path">
                  {({ field }) => (
                    <input
                      {...field}
                      id="poster_path"
                      placeholder="Enter movie poster path"
                      type="text"
                      className={
                        errors.poster_path
                          ? "input error"
                          : "input"
                      }/>
                  )}
                </Field>
                {errors.poster_path && (
                  <div className="input-feedback">{errors.poster_path}</div>
                )}
              </label>

              <div className="modal-dropdown">
                <span className="modal-label-text">Genre</span>
                <MultiSelectInput options={Constants.GENRE} name="genre"/>
              </div>


              <label htmlFor="overview" className="input-label">
                <span className="modal-label-text">OVERVIEW</span>
                <Field name="overview">
                  {({ field }) => (
                    <input
                      {...field}
                      id="overview"
                      placeholder="Enter movie overview"
                      type="text"
                      className={
                        errors.overview
                          ? "input error"
                          : "input"
                      }/>
                  )}
                </Field>
                {errors.overview && (
                  <div className="input-feedback">{errors.overview}</div>
                )}
              </label>


              <label htmlFor="runtime" className="input-label">
                <span className="modal-label-text">RUNTIME</span>
                <Field name="runtime">
                  {({ field }) => (
                    <input
                      {...field}
                      id="runtime"
                      placeholder="Enter movie runtime"
                      type="text"
                      className={
                        errors.runtime
                          ? "input error"
                          : "input"
                      }/>
                  )}
                </Field>
                {errors.runtime && (
                  <div className="input-feedback">{errors.runtime}</div>
                )}
              </label>

              <div className="add-movie-buttons">
                <button
                  type="button"
                  className="button button_primary"
                  onClick={handleClose}
                >
                  RESET
                </button>
                <button type="submit" disabled={isSubmitting} className="button button_primary">
                  SUBMIT
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
      <MovieActionPopup
        isOpen={isMovieAction}
        title="CONGRATULATION!"
        message="The movie has been added successfully!"
        handleClose={handleClose}
      />
    </>
  );
};

AddMovie.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isSubmitting: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
  }),

  errors: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};

export default AddMovie;
