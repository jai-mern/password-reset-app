// api.js

import axios from 'axios';

const API_BASE_URL = 'YOUR_BACKEND_API_BASE_URL';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
