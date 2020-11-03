import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/actions/actions';
import Dropdown from '../common/dropdown/Dropdown';
import Constants from '../constants';

const matchDispatchToProps = {updateMovies: fetchMovies};

const SortBy = (props) =>  {
  const { updateMovies } = props;

  const applySortMovies = useCallback((sortType) => {
    updateMovies(sortType.type)
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


export default connect(null, matchDispatchToProps)(SortBy);
