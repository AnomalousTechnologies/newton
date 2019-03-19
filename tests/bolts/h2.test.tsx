import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import H2 from '../../src/bolts/h2';

describe('Bolt: H2', () => {
  it('Can render h2', () => {
    const wrapper = shallow(
      <div>
        <H2>My H2</H2>
      </div>,
    );
    expect(wrapper.find(H2).text()).toContain('My H2');
    // @ts-ignore
    expect(wrapper.find(H2).type().__emotion_base).toEqual('h2');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<H2>My H2</H2>));
    expect(wrapper.find(H2).text()).toEqual('My H2');
  });
});
