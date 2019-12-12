import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'regenerator-runtime/runtime';
import App from './components/App';
import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';
import { Provider } from 'react-redux';
import store from './store';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl ?
      appState.targetUrl :
      window.location.pathname
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
