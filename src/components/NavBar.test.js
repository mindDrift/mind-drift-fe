import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

import useLogoutMock from '../utils/WithSession';
jest.mock('../utils/WithSession', () => ({}));

describe('Nav Bar component', () => {
  it('renders Nav Bar', () => {
    useLogoutMock.useLogout = () => {};
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
