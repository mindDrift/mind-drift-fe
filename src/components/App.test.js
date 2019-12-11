import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import useAuth0Mock from '../react-auth0-spa';
jest.mock('../react-auth0-spa', () => ({}));

describe('App component', () => {
  it('renders App in Loading state', () => {
    useAuth0Mock.useAuth0 = () => ({
      loading: true
    });
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders App', () => {
    useAuth0Mock.useAuth0 = () => ({
      loading: false
    });
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
