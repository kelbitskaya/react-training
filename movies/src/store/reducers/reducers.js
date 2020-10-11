import getMovies from "../../helpers/getMovies";

const initialState = getMovies();

const reducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducers;
