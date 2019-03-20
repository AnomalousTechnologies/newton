import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import H1 from '../../src/bolts/h1';

describe('Bolt: H1', () => {
  it('Can render h1', () => {
    const wrapper = shallow(
      <div>
        <H1>My H1</H1>
      </div>,
    );
    expect(wrapper.find(H1).text()).toContain('My H1');
    // @ts-ignore
    expect(wrapper.find(H1).type().__emotion_base).toEqual('h1');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<H1>My H1</H1>));
    expect(wrapper.find(H1).text()).toEqual('My H1');
  });
});
