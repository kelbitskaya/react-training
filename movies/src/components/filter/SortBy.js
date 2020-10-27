import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { changeSorting } from '../../store/actions/actions';
import Dropdown from '../common/dropdown/Dropdown';
import Constants from '../constants';


const mapStateToProps =(state) => {
  return {
    movies: state,
    sortingType: state
  }
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({updateMovies: changeSorting}, dispatch)
};

const SortBy = (props) =>  {
  const { updateMovies, movies } = props; // updateMovies-> selected sorting

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
  movies: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, matchDispatchToProps)(SortBy);
