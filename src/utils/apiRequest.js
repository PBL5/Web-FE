import Axios from 'axios';
import { API_URL } from '../config';

export const apiRequest = (url, method, payload = {}) =>
  Axios({
    method,
    url: `${API_URL}${url}`,
    data: payload,
    strictSSL: false
  });

export const POST = 'post';
export const GET = 'get';

export const LOGIN_ENTRY_POINT = '/login';
export const STUDENT_LIST_ENTRY_POINT = '/students';
export const ALL_CLASSES_ENTRY_POINT = '/classes';
