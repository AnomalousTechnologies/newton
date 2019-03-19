import React from 'react';

import { shallow } from 'enzyme';

import Optgroup from '../../src/bolts/optgroup';

describe('Bolt: Optgroup', () => {
  it('Can render optgroup', () => {
    const wrapper = shallow(
      <div>
        <Optgroup />
      </div>,
    );
    // @ts-ignore
    expect(wrapper.find(Optgroup).type().__emotion_base).toEqual('optgroup');
  });
});
