import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Drawer from '../../src/bolts/content/drawer';

describe('Bolt: Drawer', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Drawer isOpen />
      </div>,
    );
    expect(wrapper.find(Drawer)).toBeTruthy();
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Drawer isOpen />));
    expect(wrapper.find(Drawer)).toBeTruthy();
  });
});
