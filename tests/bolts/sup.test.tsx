import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Sup from '../../src/bolts/sup';

describe('Bolt: Sup', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Sup>My Sup</Sup>
      </div>,
    );
    expect(wrapper.find(Sup).text()).toEqual('My Sup');
    // @ts-ignore
    expect(wrapper.find(Sup).type().__emotion_base).toEqual('sup');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Sup>My Sup</Sup>));
    expect(wrapper.find(Sup).text()).toEqual('My Sup');
  });
});
