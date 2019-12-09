import { createAction } from 'promise-middleware-redux';
import { fetchSettings } from '../services/setting';

const getSettings = userId => fetchSettings(userId);

export const [
  fetchSettingsPromise,
  FETCH_SETTINGS,
  FETCH_SETTINGS_LOADING,
  FETCH_SETTINGS_DONE,
] = createAction('FETCH_SETTINGS', getSettings);

export const GET_LAST_USER_SESSION = 'GET_LAST_USER_SESSION';
export const SET_SETTINGS = 'SET_SETTINGS';
