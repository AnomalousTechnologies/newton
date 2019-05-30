import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Drawer, { DrawerPosition } from '../../src/bolts/content/drawer';

describe('Bolt: Drawer', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Drawer isOpen position={DrawerPosition.RIGHT} size="50%" />
      </div>,
    );
    expect(wrapper.find(Drawer)).toBeTruthy();
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Drawer isOpen position={DrawerPosition.RIGHT} size="50%" />));
    expect(wrapper.find(Drawer)).toBeTruthy();
  });
});
