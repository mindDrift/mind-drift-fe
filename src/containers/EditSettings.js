import SettingsForm from '../components/SettingsForm';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postSettings, updateSettings } from '../services/setting';
import PropTypes from 'prop-types';
import { getCurrentSettings, getIdToEdit } from '../selectors/settingsSelectors';
import { setCurrentSettings } from '../actions/settingsActions';
import { useSession } from '../utils/WithSession';

const EditSettings = ({ history }) => {
  const { user } = useSession();
  const dispatch = useDispatch();
  const currentSettings = useSelector(state => getCurrentSettings(state));
  const idToEdit = useSelector(state => getIdToEdit(state));
  const [userSettings, setUserSettings] = useState(currentSettings);

  const handleSubmit = event => {
    event.preventDefault();
    userSettings.userId = user.uid;

    const updateOrPost = idToEdit ? 
      (id, settings) => updateSettings(id, settings) :
      (_, settings) => postSettings(settings);
      
    updateOrPost(idToEdit, userSettings)
      .then(settings => {
        dispatch(setCurrentSettings(settings));
        history.push('/settings');
      });
  };

  const handleChange = ({ target }) => {
    let newValue = target.value;
    if(target.name !== 'title' && target.name !== 'description') {
      newValue = Number(target.value);
    }
    setUserSettings({ ...userSettings, [target.name]: newValue });
  };

  return (
    <SettingsForm handleChange={handleChange} handleSubmit={handleSubmit} settings={userSettings} />
  );
};

EditSettings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default EditSettings;
