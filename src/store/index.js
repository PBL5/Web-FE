import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from '../reducers/auth.reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import studentReducer from 'src/reducers/student.reducer';
import { getCookie } from 'src/utils/cookies';
import commonReducer from 'src/reducers/common.reducer';

const reducers = (state, action) => {
  const defaultState = {
    isSignedIn: false,
    user: {}
  };

  let initialState = {};
  const userCookie = getCookie('auth');
  if (userCookie) {
    initialState = JSON.parse(userCookie);
  } else {
    initialState = {
      ...defaultState
    };
  }

  if (action.type === HYDRATE)
    return { ...action.payload, authProps: { ...initialState } };
  return combineReducers({
    authProps: authReducer,
    studentProps: studentReducer,
    commonProps: commonReducer
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
