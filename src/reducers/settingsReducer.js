import {
  FETCH_SETTINGS,
  FETCH_SETTINGS_LOADING,
  FETCH_SETTINGS_DONE,
} from '../actions/settingsActions';
const initialState = {
  settingsList: [],
  loading: true,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SETTINGS_LOADING:
      return { ...state, loading: true };
    case FETCH_SETTINGS_DONE:
      return { ...state, loading: false };
    case FETCH_SETTINGS:
      return { ...state, settingsList: action.payload };
    default: return state;
  }
}
