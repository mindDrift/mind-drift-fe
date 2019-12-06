import { post } from './request';

const SESSION_URL = 'mind-drift-be.herokuapp.com/api/v1';

export const postSession = (start, duration, userId, moods, settings) => {
  return post(`${SESSION_URL}/sessions`, { start, duration, userId, moods, settings });
};

