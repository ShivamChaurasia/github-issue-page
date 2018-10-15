import axios from 'axios';

const constants = {
  BASE_URL: { dev: 'https://api.github.com', prod: 'https://api.github.com' },
};

export const getConstants = key =>
  typeof process.env.NODE_ENV !== 'undefined' ? constants[key.toLocaleUpperCase()].dev : constants[key].prod;

const instance = axios.create({
  baseURL: getConstants('BASE_URL'),
});

export default instance;
