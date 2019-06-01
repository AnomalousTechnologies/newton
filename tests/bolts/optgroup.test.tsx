import React from 'react';

import { shallow } from 'enzyme';

import Optgroup from '../../src/bolts/inputs/optgroup';

describe('Bolt: Optgroup', () => {
  it('Can render optgroup', () => {
    const wrapper = shallow(
      <div>
        <Optgroup />
      </div>,
    );
    expect(wrapper.find(Optgroup).length).toEqual(1);
  });
});
