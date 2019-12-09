import { createAction } from 'promise-middleware-redux';

// const getSettings = () => fetchSettings()
//   .then(settings => {
//     return settings.map;
//   });

const getSettings = () => ([
  {
    _id: 'inout',
    title: 'in and out',
    description: 'a basic breathing method',
    inhale: 7,
    holdIn: 0,
    exhale: 11,
    holdOut: 0,
    endTime: 126,
  },
  {
    _id: '378',
    title: '3-7-8',
    description: 'This breathing pattern aims to reduce anxiety or help you get to sleep.',
    inhale: 3,
    holdIn: 0,
    exhale: 7,
    holdOut: 8,
    endTime: 126,
  },
  {
    _id: '11box',
    title: 'box breathing',
    description: 'A powerful, yet simple, relaxation technique that aims to return breathing to its normal rhythm.',
    inhale: 5,
    holdIn: 4,
    exhale: 5,
    holdOut: 4,
    endTime: 126,
  },
]);

export const [
  fetchSettingsPromise,
  FETCH_SETTINGS,
  FETCH_SETTINGS_LOADING,
  FETCH_SETTINGS_DONE,
] = createAction('FETCH_CHARACTERS', getSettings);

export const GET_LAST_USER_SESSION = 'GET_LAST_USER_SESSION';
export const SET_SETTINGS = 'SET_SETTINGS';
