import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import withSessionMock from '../utils/WithSession';
jest.mock('../utils/WithSession', () => ({}));

describe('App component', () => {
  it('renders App in logged-in state', () => {
    withSessionMock.withSession = Comp => (<Comp />);
    
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders App when not logged in', () => {
    withSessionMock.withSession = Comp => (<></>);

    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
