import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';
import {createWrapper} from 'next-redux-wrapper';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;


const createStoreWithThunkMiddleware = applyMiddleware(thunk)(createStore);

const makeStore = function (initialState) {
  return createStoreWithThunkMiddleware(rootReducer, initialState);
};
export const wrapper = createWrapper(makeStore, {debug: true});
