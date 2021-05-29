import Axios from 'axios';
import { API_URL } from '../config';

export const apiRequest = (url, method, payload = {}, params = {}) =>
  Axios({
    method,
    url: `${API_URL}${url}`,
    data: payload,
    strictSSL: false,
    params
  });

export const POST = 'post';
export const GET = 'get';

export const LOGIN_ENTRY_POINT = '/login';
export const STUDENT_LIST_ENTRY_POINT = '/students';
export const ALL_CLASSES_ENTRY_POINT = '/classes';
export const ADD_STUDENT_ENTRY_POINT = '/student/add';
export const CALL_ROLL_ENTRY_POINT = '/recognizes';
export const CHECK_ATTENDANCE_ENTRY_POINT = '/attendance';
