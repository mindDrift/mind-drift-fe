import React from 'react';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Breathe from './Breathe';

const App = () => {

  return (
    <div>
      <Router history={history}>
        <Home />
        <Breathe />
      </Router>
    </div>
  );
};

export default App;
