import React, { createContext, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import Loading from '../components/Loading';
import logo from '../assets/mindDriftIcon.png';
import styles from './WithSession.css';

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
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
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
        setIsAuthenticated(true);
        setUser(user);
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
    if(loading) return <Loading loading={loading} />;
    if(!loading && !isAuthenticated) {
      return (
        <>
          <section className={styles.WithSession}>
            <img src={logo} alt="mindDrift logo" />
          </section>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>
      );
    }
    return <Comp {...props} />;
  };
};

export const useLogout = () => {
  const history = useHistory();
  return () => firebase.auth().signOut()
    .then(() => history.push('/'));
};

