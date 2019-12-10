import {
  FETCH_SETTINGS,
  FETCH_SETTINGS_LOADING,
  FETCH_SETTINGS_DONE,
  SET_CURRENT_SETTINGS
} from '../actions/settingsActions';
const initialState = {
  settingsList: [],
  loading: true,
  currentSettings: {
    title: 'Box Breathing',
    inhale: 5,
    holdIn: 4,
    exhale: 5,
    holdOut: 4,
    endTime: 126
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SETTINGS_LOADING:
      return { ...state, loading: true };
    case FETCH_SETTINGS_DONE:
      return { ...state, loading: false };
    case FETCH_SETTINGS:
      return { ...state, settingsList: action.payload };
    case SET_CURRENT_SETTINGS:
      return { ...state, currentSettings: action.payload };
    default: return state;
  }
}
