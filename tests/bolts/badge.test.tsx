import React from 'react';

import { shallow } from 'enzyme';

import Badge from '../../src/bolts/content/badge';

describe('Bolt: Badge', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Badge />
      </div>,
    );
    expect(wrapper.find(Badge)).toBeTruthy();
  });
});
