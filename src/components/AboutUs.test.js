import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from './AboutUs';

describe('About Us component', () => {
  it('renders', () => {
    Date.now = () => 42;
    const wrapper = shallow(<AboutUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
