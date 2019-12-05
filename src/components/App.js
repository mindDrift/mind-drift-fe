import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Breathe from './Breathe';

const App = () => {

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/breathe'>
            <Breathe inhale={3} exhale={4} holdIn={2} holdOut={0} endTime={12} />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
