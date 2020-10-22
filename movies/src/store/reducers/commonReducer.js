import {FETCH_MOVIES_LIST_FAILURE, FETCH_MOVIES_LIST_REQUEST, FETCH_MOVIES_LIST_SUCCESS} from "../actions/actionTypes";

const initialState = {
  loading: false,
  movies: [],
  error: '',
};

export default function commonReducer (state = initialState, action) {
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
}
case CHANGE_SORTING1:
  return {
    ...state,
    sortingType: action.payload
  };
