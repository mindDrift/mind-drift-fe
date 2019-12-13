import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import Loading from '../components/Loading';
// import { setToken } ;

const AuthorizeContext = createContext();

const config = {
  apiKey: 'AIzaSyAyHM340UBSXgbWWGa8TMDOuRF07dCBv4c',
  authDomain: 'mind-drift-89ebd.firebaseapp.com',
  projectId: 'mind-drift-89ebd',
  databaseURL: 'mind-drift-89ebd.firebaseio.com',
  storageBucket: 'mind-drift-89ebd.appspot.com'
};

firebase.initializeApp(config);

const uiConfig = {
  singInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      if(user) {
        user.getIdToken()
          .then(token => {
            console.log(token);
            // setToken(token);
            setIsAuthenticated(true);
          });
        setUser(user);
        console.log(user);
      }
      else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    }); 
  });

  return (
    <AuthorizeContext.Provider value={{ user, loading, isAuthenticated }}>
      {children}
    </AuthorizeContext.Provider>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useSession = () => {
  return useContext(AuthorizeContext);
};

export const withSession = Comp => {
  return function WithSession(props) {
    const { loading, isAuthenticated } = useSession();
    if(loading) return <Loading />;
    if(!loading && !isAuthenticated) {
      return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
    }
    return <Comp {...props} />;
  };
};

export const useLogout = () => {
  const history = useHistory();
  return () => firebase.auth().signOut()
    .then(() => history.push('/'));
};

