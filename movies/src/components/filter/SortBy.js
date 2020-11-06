import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../store/actions/actions';
import Dropdown from '../common/dropdown/Dropdown';
import Constants from '../constants';
import { useHistory } from "react-router-dom";

const matchDispatchToProps = {updateMovies: fetchMovies};

const SortBy = (props) =>  {
  const { updateMovies } = props;
    let history = useHistory();

  const applySortMovies = useCallback((sortType) => {
    updateMovies(sortType.type);
    history.push(`/search?sortOrder=asc&sortBy=${sortType.type}`)
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
