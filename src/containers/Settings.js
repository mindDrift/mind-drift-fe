import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '../react-auth0-spa';
import { fetchSettingsPromise } from '../actions/settingsActions';
import { getSettings, getSettingsLoading } from '../selectors/settingsSelectors';
import NavBar from '../components/NavBar';
import SettingsCards from '../components/SettingsCards';

const Settings = () => {
  const { user } = useAuth0();

  const settingsList = useSelector(state => getSettings(state));
  const loading = useSelector(state => getSettingsLoading(state));

  const dispatch = useDispatch();
  const updateSettings = () => dispatch(fetchSettingsPromise(user.sub));
  useEffect(() => {
    updateSettings();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      { loading && <h2>Loading ... </h2> }
      { !loading && 
        <SettingsCards settingsList={settingsList} />
      }
    </>
  );
};

export default Settings;
