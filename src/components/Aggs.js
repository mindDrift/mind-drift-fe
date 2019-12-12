import React from 'react';
import PropTypes from 'prop-types';

const Aggs = ({ average, total, streak }) => {
  return (
    <div>
      <p>{average.time} {average.type} is your average time spent breathing</p>
      <p>{total.time} {total.type} is you total time breathing with us</p>
      <p>{streak} is you current streak keep it going!</p>
    </div>
  );
};

Aggs.propTypes = {
  average: PropTypes.object.isRequired,
  total: PropTypes.object.isRequired,
  streak: PropTypes.number.isRequired
};

export default Aggs;
