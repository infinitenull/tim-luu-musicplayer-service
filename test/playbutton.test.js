import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import PlayButton from '../client/src/components/PlayButton';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Play Button Component', () => {
  it('simulates button click for play-button', () => {
    const wrap = shallow(
      <PlayButton />,
    );
    wrap.find('div').simulate('click');
  });
  it('should render Play Button without throwing an error', () => {
    expect(shallow(<PlayButton />).exists()).toBe(true);
  });
  it('Should render correctly according to snapshot', () => {
    const playbutton = shallow(<PlayButton />);
    expect(toJson(playbutton)).toMatchSnapshot();
  });
});