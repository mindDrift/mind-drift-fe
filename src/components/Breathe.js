import React, { useState, useEffect } from 'react';

const Breathe = ({}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    if(counter === 3) return;
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
      <button>Done</button>
    </div>
  );
};

export default Breathe;
