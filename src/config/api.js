import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_USER_BASE_URL;

const api = create({
  baseURL,
  timeout: 15000
});

export default api;
