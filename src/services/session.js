import { post } from './request';

const SESSION_URL = 'mind-drift-be.herokuapp.com/api/v1';

export const postSession = (start, duration, userId, settings) => {
  console.log('post', start, duration, userId, settings);
  return post(`${SESSION_URL}/sessions`, { start, duration, userId, settings });
};

