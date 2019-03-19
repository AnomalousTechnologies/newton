import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Small from '../../src/bolts/small';

describe('Bolt: Small', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Small>My Small</Small>
      </div>,
    );
    expect(wrapper.find(Small).text()).toEqual('My Small');
    // @ts-ignore
    expect(wrapper.find(Small).type().__emotion_base).toEqual('small');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Small>My Small</Small>));
    expect(wrapper.find(Small).text()).toEqual('My Small');
  });
});
