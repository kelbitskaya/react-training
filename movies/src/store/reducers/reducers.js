import {
  FETCH_MOVIES_LIST_REQUEST,
  FETCH_MOVIES_LIST_SUCCESS,
  FETCH_MOVIES_LIST_FAILURE
} from "../actions/actionTypes"

const initialState = {
  loading: false,
  movies: [],
  error: ''
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_MOVIES_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
        error: ''
      };
    case FETCH_MOVIES_LIST_FAILURE:
      return {
        loading: false,
        movies: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducers;
