import { LOG_OUT, SET_USER } from '../types/auth.type';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

export const logout = () => ({
  type: LOG_OUT
});
