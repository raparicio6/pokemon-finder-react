import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_POKEMON_BASE_URL;

const api = create({
  baseURL,
  timeout: 15000
});

export default api;
