import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
import useAuth0Mock from '../react-auth0-spa';

jest.mock('../react-auth0-spa', () => ({}));

describe('Nav Bar component', () => {
  it('renders Nav Bar', () => {
    useAuth0Mock.useAuth0 = () => ({
      isAuthenticated: true,
      loginWithRedirect: () => true,
      logout: () => false,
    });
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
