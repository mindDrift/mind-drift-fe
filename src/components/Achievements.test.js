import React from 'react';
import { shallow } from 'enzyme';
import Achievements from './Achievements';

describe('Achievements component', () => {
  it('renders empty Achievements', () => {
    const wrapper = shallow(<Achievements achieves={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders some achievements', () => {
    const achieves = [
      {
        _id: '1',
        name: 'First Steps',
        img: 'https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/firstStepsicon.png',
        description: 'Congratulations, you have logged your first breathing session with mindDrift',
      },
      {
        _id: '2',
        name: '2-Day Streak',
        img: 'https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/streakTWO.png',
        description: 'Congratulations, you completed a breathing session every day for the past 2 days!',
      },
      {
        _id: '3',
        name: '5-Day Streak',
        img: 'https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/streakFIVE.png',
        description: 'Congratulations, you completed a breathing session every day for the past 2 days!',
      }
    ];
    const wrapper = shallow(<Achievements achieves={achieves} />);
    expect(wrapper).toMatchSnapshot();
  });
});


