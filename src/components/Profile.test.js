import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';
import useAuth0Mock from '../react-auth0-spa';

jest.mock('../react-auth0-spa', () => ({}));

describe('Profile component', () => {

  it('renders the profile in a loading state', () => {
    useAuth0Mock.useAuth0 = () => ({
      loading: true,
    });
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();

    useAuth0Mock.useAuth0 = () => ({
      loading: false,
      user: null,
    });
    const wrapper2 = shallow(<Profile />);
    expect(wrapper2).toMatchSnapshot();
  });

  it('renders the profile', () => {
    useAuth0Mock.useAuth0 = () => ({
      loading: false,
      user: {
        name: 'me',
        email: 'me@me.com'
      }
    });
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
});
