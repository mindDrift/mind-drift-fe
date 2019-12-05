import React from 'react';
import NavBar from './NavBar';
import { useAuth0 } from '../react-auth0-spa';

const App = () => {
  const { loading } = useAuth0(); 

  if(loading) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <header>
        <NavBar />
      </header>
    </div>
  );
};

export default App;
