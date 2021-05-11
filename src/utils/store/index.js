import { combineReducers, createStore } from 'redux';
import authReducer from '../reducers/auth.reducer';

const reducers = combineReducers({ auth: authReducer });

const store = createStore(reducers);

export default store;
