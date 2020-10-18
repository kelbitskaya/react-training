import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/actions'
import PropTypes from 'prop-types';
import Dropdown from '../common/dropdown/Dropdown';
import Constants from '../constants';

const mapStateToProps =(state) => {
  return {movies: state}
};

const SortBy = (props) =>  {
  const { updateMovies, movies } = props;

  const applySortMovies = useCallback((sortType) => {
    const sortedMovieList = props.dispatch(fetchMovies(sortType.type));
    updateMovies(sortedMovieList);
  }, [updateMovies]);

  return (
    <div className="sort-by">
      <p className="sort-by__text">sort by</p>
      <Dropdown options={Constants.FILTERS} updateMovies={applySortMovies}/>
    </div>
  );
};

SortBy.propTypes = {
  updateMovies: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(SortBy);
