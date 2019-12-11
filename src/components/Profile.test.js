import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';
import useAuth0Mock from '../react-auth0-spa';

jest.mock('../react-auth0-spa', () => ({}));

describe('Profile component', () => {

  it('renders the profile', () => {
    useAuth0Mock.useAuth0 = () => ({
      user: {
        name: 'me',
        email: 'me@me.com',
        picture: 'http://domain.com/pictures/0000.png',
      }
    });
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
});
