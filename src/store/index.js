import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, createStore } from 'redux';
import authReducer from '../reducers/auth.reducer';

const reducers = combineReducers({ auth: authReducer });

const initStore = () => {
  return createStore(reducers);
};

export const wrapper = createWrapper(initStore);
