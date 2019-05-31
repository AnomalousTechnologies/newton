import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import Drawer, { DrawerPosition } from '../../src/bolts/content/drawer';

describe('Bolt: Drawer', () => {
  it('Can render open', () => {
    const wrapper = mount(withTheme(
      <div>
        <Drawer isOpen position={DrawerPosition.RIGHT} size="50%" />
      </div>,
    ));
    expect(wrapper.find(Drawer)).toBeTruthy();
  });

  it('Can render closed', () => {
    const wrapper = mount(withTheme(
      <div>
        <Drawer isOpen={false} position={DrawerPosition.RIGHT} size="50%" />
      </div>,
    ));
    expect(wrapper.find(Drawer)).toBeTruthy();
  });

  it('Can render right', () => {
    const wrapper = mount(withTheme(
      <div>
        <Drawer isOpen position={DrawerPosition.RIGHT} size="50%" />
      </div>,
    ));
    expect(wrapper.find(Drawer)).toBeTruthy();
  });

  it('Can render bottom', () => {
    const wrapper = mount(withTheme(
      <div>
        <Drawer isOpen position={DrawerPosition.BOTTOM} size="50%" />
      </div>,
    ));
    expect(wrapper.find(Drawer)).toBeTruthy();
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Drawer isOpen position={DrawerPosition.RIGHT} size="50%" />));
    expect(wrapper.find(Drawer)).toBeTruthy();
  });
});
