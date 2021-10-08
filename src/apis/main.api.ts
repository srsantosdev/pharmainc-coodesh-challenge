import axios from 'axios';

export const mainApi = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API_URL,
});
