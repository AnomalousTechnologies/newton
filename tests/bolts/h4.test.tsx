import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import H4 from '../../src/bolts/typography/h4';

describe('Bolt: H4', () => {
  it('Can render h4', () => {
    const wrapper = shallow(
      <div>
        <H4>My H4</H4>
      </div>,
    );
    expect(wrapper.find(H4).text()).toContain('My H4');
    // @ts-ignore
    expect(wrapper.find(H4).type().__emotion_base).toEqual('h4');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<H4>My H4</H4>));
    expect(wrapper.find(H4).text()).toEqual('My H4');
  });
});
