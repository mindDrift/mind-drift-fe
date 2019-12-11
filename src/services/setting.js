import { get, post, put } from './request';

const SESSION_URL = 'https://mind-drift-be.herokuapp.com/api/v1';

export const fetchSettings = (userId = '') => {
  return get(`${SESSION_URL}/settings?userId=${userId}`);
};

export const postSettings = (settings) => {
  return post(`${SESSION_URL}/settings`, settings);
};

export const updateSettings = (id, settings) => {
  return put(`${SESSION_URL}/settings/${id}`, settings);
};
