import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Small from '../../src/bolts/typography/small';

describe('Bolt: Small', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Small>My Small</Small>
      </div>,
    );
    expect(wrapper.find(Small).text()).toEqual('My Small');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Small>My Small</Small>));
    expect(wrapper.find(Small).text()).toEqual('My Small');
  });
});
