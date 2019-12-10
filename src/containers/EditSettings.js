import SettingsForm from '../components/SettingsForm';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '../react-auth0-spa';
import { postSettings } from '../services/setting';
import PropTypes from 'prop-types';
import { getCurrentSettings } from '../selectors/settingsSelectors';

const EditSettings = ({ history }) => {
  const { user } = useAuth0();
  const currentSettings = useSelector(state => getCurrentSettings(state));
  const [userSettings, setUserSettings] = useState(currentSettings);

  const handleSubmit = event => {
    event.preventDefault();
    userSettings.userId = user.sub;
    postSettings(userSettings)
      .then(settings => {
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
