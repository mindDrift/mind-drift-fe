import React from 'react';
import { shallow } from 'enzyme';
import Aggs from './Aggs';

describe('Aggregations component', () => {

  it('renders User Stats from Aggregation data', () => {
    const average = {
      time: 1.4,
      type: 'minutes',
    };
    const total = {
      time: 2.5,
      type: 'hours',
    };
    const wrapper = shallow(<Aggs average={average} total={total} streak={5} />);
    expect(wrapper).toMatchSnapshot();
  });
});
