import { get } from './request';

const ACHIEVE_URL = 'https://mind-drift-be.herokuapp.com/api/v1';

export const fetchAchievements = (userId = '') => {
  return get(`${ACHIEVE_URL}/achievements?userId=${userId}`);
};
