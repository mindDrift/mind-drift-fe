import { post, get } from './request';

const SESSION_URL = 'https://mind-drift-be.herokuapp.com/api/v1';

export const postSession = (start, duration, userId, settings) => {
  return post(`${SESSION_URL}/sessions`, { start, duration, userId, settings });
};

export const getAverage = (userId) => {
  return get(`${SESSION_URL}/average?userId=${userId}`);
};

export const getTotal = (userId) => {
  return get(`${SESSION_URL}/total?userId=${userId}`);
};
