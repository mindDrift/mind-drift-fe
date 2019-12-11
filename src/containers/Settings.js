import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '../react-auth0-spa';
import { fetchSettingsPromise, setCurrentSettings, setIdToEdit } from '../actions/settingsActions';
import { getSettings, getSettingsLoading, getCurrentSettings } from '../selectors/settingsSelectors';
import NavBar from '../components/NavBar';
import SettingsCards from '../components/SettingsCards';
import PropTypes from 'prop-types';

const Settings = ({ history }) => {
  const { user } = useAuth0();
  const [selectedId, setSelectedId] = useState('');

  const settingsList = useSelector(state => getSettings(state));
  const loading = useSelector(state => getSettingsLoading(state));
  const currentSettings = useSelector(state => getCurrentSettings(state));
  

  const dispatch = useDispatch();
  const updateSettings = () => dispatch(fetchSettingsPromise(user.sub));
  useEffect(() => {
    updateSettings();
    setSelectedId(currentSettings._id || '');
  }, []);

  const handleSelectSettings = id => {
    const settings = settingsList.find(({ _id }) => _id === id);
    dispatch(setCurrentSettings(settings));
    setSelectedId(id);
  };
  const handleBreatheNow = () => {
    history.push('/breathe');
  };
  const handleEdit = id => {
    dispatch(setIdToEdit(id));
    history.push('/edit-settings');
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      { loading && <h2>Loading ... </h2> }
      { !loading && 
        <SettingsCards 
          settingsList={settingsList} 
          handleSelectSettings={handleSelectSettings}
          handleBreatheNow={handleBreatheNow} 
          handleEdit={handleEdit}
          selectedId={selectedId}
        />
      }
    </>
  );
};

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Settings;
