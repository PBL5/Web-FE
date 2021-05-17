import { getCookie, removeCookie, setCookie } from '../utils/cookies';
import { LOG_OUT, SET_USER } from '../types/auth.type';

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

const authReducer = (state = initialState, action) => {
  const authObj = {
    isSignedIn: true,
    user: action.payload
  };

  switch (action.type) {
    case SET_USER:
      setCookie('auth', authObj);
      return { ...state, isSignedIn: true, user: action.payload };
    case LOG_OUT:
      removeCookie('auth');
      return { ...defaultState };
    default:
      return state;
  }
};

export default authReducer;
