import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './utils/WithSession';

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
  document.getElementById('root')
);
