import getMovies from '../../helpers/api';
import loaderAction from '../actions/loaderAction';

export const loadMoviesDefault = () => (dispatch) => {
  dispatch(loaderAction(true));
  setTimeout(()=>{
    getMovies()
      .then((data) => dispatch(moviesLoaded(data)))
      .catch()
      .finally();
  },1000)
};


export const moviesLoaded = (payload) => ({
  type: 'MOVIES_LIST',
  payload,
});
