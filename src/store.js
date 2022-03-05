import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerWrapper from "./reducers";

export const initializeStore = () => {
  const AppReducers = combineReducers(reducerWrapper.reducers);

  const rootReducer = (state, action) => {
    return AppReducers(state, action);
  };

  let store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
};
