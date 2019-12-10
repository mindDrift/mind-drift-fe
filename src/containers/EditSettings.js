import SettingsForm from '../components/SettingsForm';
import React, { useState, useEffect } from 'react';

const EditSettings = () => {
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
    console.log('event firing!');
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

export default EditSettings;
