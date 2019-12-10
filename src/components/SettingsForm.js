import React from 'react';
import PropTypes from 'prop-types';

const SettingsForm = ({ settings, handleSubmit }) => {
  const { title, description, inhale, holdIn, exhale, holdOut, endTime } = settings;
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        title:
        <input type='text' name='title' placeholder='title' value={title} />
      </label>
      <label>
        description:
        <textarea name='description' placeholder='description' value={description} />
      </label>
      <label>
        Inhale:
        <input type='number' name='inhale' value={inhale} />
      </label>
      <label>
        Hold Inhale:
        <input type='number' name='holdIn' value={holdIn} />
      </label>
      <label>
        Exhale:
        <input type='number' name='exhale' value={exhale} />
      </label>
      <label>
        Hold Exhale:
        <input type='number' name='holdOut' value={holdOut} />
      </label>
      <label>
        Duration:
        <input type='number' name='endTime' value={endTime} />
      </label>
      <button>Save</button>
    </form>
  );
};

SettingsForm.propTypes = {
  settings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    inhale: PropTypes.number.isRequired,
    holdIn: PropTypes.number.isRequired,
    exhale: PropTypes.number.isRequired,
    holdOut: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SettingsForm;
