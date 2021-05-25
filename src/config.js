// const environment = 'dev';
const environment = 'production';

export const API_URL = environment === 'dev' ? 'http://localhost:8000/api' : 'http://13.228.21.39:8000/api';