import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import H3 from '../../src/bolts/typography/h3';

describe('Bolt: H3', () => {
  it('Can render h3', () => {
    const wrapper = shallow(
      <div>
        <H3>My H3</H3>
      </div>,
    );
    expect(wrapper.find(H3).text()).toContain('My H3');
    // @ts-ignore
    expect(wrapper.find(H3).type().__emotion_base).toEqual('h3');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<H3>My H3</H3>));
    expect(wrapper.find(H3).text()).toEqual('My H3');
  });
});
