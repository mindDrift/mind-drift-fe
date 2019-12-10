import SettingsForm from '../components/SettingsForm';
import React, { useState } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { postSettings } from '../services/setting';
import PropTypes from 'prop-types';

const EditSettings = ({ history }) => {
  const { user } = useAuth0();

  const initialSettings = {
    title: 'Box Breathing',
    description: 'HELLO',
    inhale: 5,
    holdIn: 4,
    exhale: 5, 
    holdOut: 4,
    endTime: 126
  };

  const [userSettings, setUserSettings] = useState(initialSettings);

  const handleSubmit = event => {
    event.preventDefault();
    userSettings.userId = user.sub;
    postSettings(userSettings)
      .then(settings => {
        console.log('would be nice to use Redux to set the active selection in settings page to', settings._id);
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
