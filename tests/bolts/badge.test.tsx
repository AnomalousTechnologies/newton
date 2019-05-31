import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Badge, { BadgeType } from '../../src/bolts/content/badge';

describe('Bolt: Badge', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Badge />
      </div>,
    );
    expect(wrapper.find(Badge)).toBeTruthy();
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Badge type={BadgeType.SUCCESS} />));
    expect(wrapper.find(Badge)).toBeTruthy();
  });
});
