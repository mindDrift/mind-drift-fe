import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

import withSessionMock from '../utils/WithSession';
jest.mock('../utils/WithSession', () => ({}));

import achievementServicesMock from '../services/achievement';
jest.mock('../services/achievement', () => ({}));

import sessionServicesMock from '../services/session';
jest.mock('../services/session', () => ({}));

import userServicesMock from '../services/user';
jest.mock('../services/user', () => ({}));

describe('Profile component', () => {
  withSessionMock.useSession = () => ({
    user: {
      displayName: 'me',
      photoURL: 'image_url',
    }
  });

  achievementServicesMock.fetchAchievements = () => ([]);

  sessionServicesMock.getAverage = () => [60];
  sessionServicesMock.getTotal = () => [12345];

  userServicesMock.fetchUser = () => [{ currentStreak: 5 }];

  it('renders the profile', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
});
