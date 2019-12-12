import { get } from './request';

const USER_URL = 'https://mind-drift-be.herokuapp.com/api/v1';

export const fetchUser = (userId = '') => {
  return get(`${USER_URL}/users?userId=${userId}`);
};
