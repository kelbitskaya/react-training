import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from "formik";
import * as Yup from "yup";
import CloseButton from '../closeButton/CloseButton';
import MultiSelectInput from '../common/multiSelectInput/MultiSelectInput';
import Constants from '../constants';
import MovieActionPopup from '../movieActionPopup/MovieActionPopup';
import  DatePicker from "../common/datepicker/DatePicker";
import {updateMovie} from "../../store/actions/actions";

const matchDispatchToProps = { updateMovies: updateMovie };

const MovieEditPopup = ({
        title,
        releaseDate,
        url,
        id,
        overview,
        runtime,
        handleClose,
        isOpen,
        updateMovies,
      }) => {
  const [isMovieAction] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      className="modal"
      overlayClassName="modal-overlay"
      onRequestClose={handleClose}
      houldCloseOnOverlayClick={false}
    >
      <div className="modal-content">
        <CloseButton handleClose={handleClose} />

        <Formik
          initialValues={{
            title: title,
            release_date: releaseDate,
            poster_path: url,
            overview: overview,
            runtime: runtime,
            id: id,
          }}
          onSubmit={(values) => {
            const fromValues = values;
            fromValues.runtime = +fromValues.runtime;
            updateMovies(fromValues, id);
            handleClose(!isMovieAction);
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
              values,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="input-label">
                  <span className="modal-label-text">MOVIE ID</span>
                  <input
                    id="title"
                    placeholder="Enter movie title"
                    type="text"
                    value={values.id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='input'
                    disabled
                  />
                </label>
                <label htmlFor="title" className="input-label">
                  <span className="modal-label-text">Title</span>
                  <input
                    id="title"
                    placeholder="Enter movie title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.title
                        ? "input error"
                        : "input"
                    }
                  />
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
                  <input
                    id="poster_path"
                    placeholder="Enter movie poster path"
                    type="text"
                    value={values.poster_path}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.poster_path
                        ? "input error"
                        : "input"
                    }
                  />
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
                  <input
                    id="overview"
                    placeholder="Enter movie overview"
                    type="text"
                    value={values.overview}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.overview
                        ? "input error"
                        : "input"
                    }
                  />
                  {errors.overview && (
                    <div className="input-feedback">{errors.overview}</div>
                  )}
                </label>


                <label htmlFor="runtime" className="input-label">
                  <span className="modal-label-text">RUNTIME</span>
                  <input
                    id="runtime"
                    type="text"
                    placeholder="Enter movie runtime"
                    value={values.runtime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.runtime
                        ? "input error"
                        : "input"
                    }
                  />
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
      </div>
    </Modal>
  );
};

MovieEditPopup.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateMovies: PropTypes.func.isRequired,
  values: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
  }).isRequired,

  errors: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};


export default connect(null, matchDispatchToProps)(MovieEditPopup);
