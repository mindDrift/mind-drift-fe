import { get } from './request';

const SESSION_URL = 'https://mind-drift-be.herokuapp.com/api/v1';

export const fetchSettings = (userId = '') => {
  return get(`${SESSION_URL}/settings?userId=${userId}`);
};
