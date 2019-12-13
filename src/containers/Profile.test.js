import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

import withSessionMock from '../utils/WithSession';
jest.mock('../utils/WithSession', () => ({}));

describe('Profile component', () => {
  it('renders the profile', () => {
    withSessionMock.useSession = () => ({
      user: {
        displayName: 'me',
        photoURL: 'image_url',
      }
    });
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
});
