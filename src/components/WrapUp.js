import React from 'react';
import PropTypes from 'prop-types';

const WrapUp = ({ handleSubmit }) => {

  return (
    <>
      <p>Session complete ... how do you feel?</p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default WrapUp;

WrapUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};


