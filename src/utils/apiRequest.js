import Axios from 'axios';
import { API_URL } from '../config';

export const apiRequest = (url, method, payload = {}) =>
  Axios({
    method: 'POST',
    url: `http://localhost:8000/api/login`,
    data: payload,
    strictSSL: false
  });

export const POST = 'post';
export const GET = 'get';

export const LOGIN_ENTRY_POINT = '/log-in';
