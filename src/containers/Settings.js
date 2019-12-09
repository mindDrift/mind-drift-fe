import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettingsPromise } from '../actions/settingsActions';
import { getSettings } from '../selectors/settingsSelectors';
import NavBar from '../components/NavBar';
import SettingsCards from '../components/SettingsCards';

const Settings = () => {

  const settingsList = useSelector(state => getSettings(state));

  const dispatch = useDispatch();
  const updateSettings = () => dispatch(fetchSettingsPromise());
  useEffect(() => {
    updateSettings();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <ul>
        <SettingsCards settingsList={settingsList} />
      </ul>
    </>
  );
};

export default Settings;
