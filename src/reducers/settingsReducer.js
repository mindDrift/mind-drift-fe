import {
  FETCH_SETTINGS,
  FETCH_SETTINGS_LOADING,
  FETCH_SETTINGS_DONE,
  SET_CURRENT_SETTINGS,
  SET_ID_TO_EDIT,
} from '../actions/settingsActions';
const initialState = {
  settingsList: [],
  idToEdit: '',
  loading: true,
  currentSettings: {
    userId: '__default__',
    title: '',
    description: '',
    inhale: 4,
    holdIn: 3,
    exhale: 4,
    holdOut: 3,
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
    case SET_ID_TO_EDIT:
      return { ...state, idToEdit: action.payload };
    default: return state;
  }
}
