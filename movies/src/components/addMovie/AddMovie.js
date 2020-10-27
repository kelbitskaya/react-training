import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import MultiSelectInput from '../common/multiSelectInput/MultiSelectInput';
import Datepicker from '../common/datepicker/Datepicker';
import CloseButton from '../closeButton/CloseButton';
import MovieActionPopup from '../movieActionPopup/MovieActionPopup';
import Constants from '../constants';
import {editMoviesList} from "../../store/actions/actions";

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMovies: editMoviesList}, dispatch)
};

const mapStateToProps = (state) => {
  return {
    state,
  }
};

const AddMovie = (props) => {
  const {state, updateMovies} = props;
  const [currentMovies, setCurrentMovies] = useState(state.movies);
  const [isMovieAction, isMovieActionPopup] = useState(false);
  const { handleClose } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    const newList = [...state.movies.data, values];
    state.movies.data = newList;
    setCurrentMovies( state.movies);

    console.log('v5', values);
    updateMovies(currentMovies);
    isMovieActionPopup(true);
  };

  return (
    <>
      <CloseButton handleClose={handleClose} />
      <form onSubmit={handleSubmit}>
        <p className="modal-title">Add Movie</p>
        <Input
          id="movie-title"
          title="Title"
          labelClassName="input-label"
          name="title"
        />
        <Datepicker
          id="movie-release"
          title="Release date"
          labelClassName="input-label"
          value={this}
          name="release_date"
        />
        <Input
          id="movie-url"
          title="Movie url"
          labelClassName="input-label"
          name="poster_path"
        />
        <div className="modal-dropdown">
          <span className="modal-label-text">Genre</span>
          <MultiSelectInput options={Constants.GENRE} />
        </div>
        <Input
          id="movie-overview"
          title="overview"
          labelClassName="input-label"
          name="overview"
        />
        <Input
          id="movie-runtime"
          title="runtime"
          labelClassName="input-label"
          name="runtime"
        />
        <div className="add-movie-buttons">
          <Button
            className="button button_secondary"
            title="RESET"
            handleClick={() => {}}
          />
          <Button
            className="button button_primary"
            title="SUBMIT"
            type="submit"
          />
        </div>
      </form>
      <MovieActionPopup
        isOpen={isMovieAction}
        title="CONGRATULATION!"
        message="The movie has been added successfully!"
        handleClose={handleClose}
      />
    </>
  );
}

AddMovie.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(AddMovie);
