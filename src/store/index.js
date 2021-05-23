import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from '../reducers/auth.reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import studentReducer from 'src/reducers/student.reducer';

const reducers = (state, action) => {
  if (action.type === HYDRATE) return { ...action.payload };
  return combineReducers({
    authProps: authReducer,
    studentProps: studentReducer
  })(state, action);
};

const initStore = (initialState = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      reducers,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
  }
  return createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
};

export const wrapper = createWrapper(initStore);
