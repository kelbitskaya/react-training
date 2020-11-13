import {
  FETCH_MOVIES_LIST_REQUEST,
  FETCH_MOVIES_LIST_SUCCESS,
  FETCH_MOVIES_LIST_FAILURE,
  CHANGE_MOVIES_LIST,
  UPDATE_MOVIE,
} from "../actions/actionTypes"

const initialState = {
  loading: false,
  movies: [],
  error: '',
  sortingType: 'release_date',
  filteringType: 'all',
  currentMovie: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        sortingType: 'release_date',
        filteringType: 'all',
        error: ''
      };
    case FETCH_MOVIES_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload
      };

    case CHANGE_MOVIES_LIST:
      return {
        ...state,
        movies: action.payload,
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    default:
      return state;
  }
};


export default rootReducer;
