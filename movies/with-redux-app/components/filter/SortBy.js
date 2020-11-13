import React, {useCallback} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from "react-router-dom";
import { fetchMovies } from '../../store/actions/actions';
import Dropdown from '../common/dropdown/Dropdown';
import Constants from '../constants';
import {useRouter} from "next/router";

const matchDispatchToProps = {updateMovies: fetchMovies};

const SortBy = (props) =>  {
  const { updateMovies } = props;

  // const history = useHistory();
  // const location = useLocation();

  const router = useRouter();
  const { pathname } = router;

  const applySortMovies = useCallback((sortType) => {
    // const currentLocation = !!pathname.search ? pathname.search : router.location.search;
    // const params = new URLSearchParams(currentLocation);
    // const title = params.get('q');
    // const filter = params.get('filter');
    //
    // updateMovies(sortType.type, filter, title);
    // history.push(`/search?${params.toString()}`);
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
