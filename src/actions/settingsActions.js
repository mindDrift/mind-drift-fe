import { createAction } from 'promise-middleware-redux';
import { fetchSettings } from '../services/setting';

const getSettings = userId => fetchSettings(userId);

export const [
  fetchSettingsPromise,
  FETCH_SETTINGS,
  FETCH_SETTINGS_LOADING,
  FETCH_SETTINGS_DONE,
] = createAction('FETCH_SETTINGS', getSettings);

export const SET_CURRENT_SETTINGS = 'SET_CURRENT_SETTINGS';
export const setCurrentSettings = payload => ({
  type: SET_CURRENT_SETTINGS,
  payload: payload
});

export const SET_ID_TO_EDIT = 'SET_ID_TO_EDIT';
export const setIdToEdit = payload => ({
  type: SET_ID_TO_EDIT,
  payload: payload
});
