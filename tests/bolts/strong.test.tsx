import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Strong from '../../src/bolts/typography/strong';

describe('Bolt: Strong', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Strong>My Strong</Strong>
      </div>,
    );
    expect(wrapper.find(Strong).text()).toEqual('My Strong');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Strong>My Strong</Strong>));
    expect(wrapper.find(Strong).text()).toEqual('My Strong');
  });
});
