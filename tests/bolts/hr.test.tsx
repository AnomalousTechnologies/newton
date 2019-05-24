import React from 'react';

import { shallow } from 'enzyme';

import HardRule from '../../src/bolts/content/hr';

describe('Bolt: HardRule', () => {
  it('Can render hr', () => {
    const wrapper = shallow(
      <div>
        <HardRule />
      </div>,
    );
    // @ts-ignore
    expect(wrapper.find(HardRule).type().__emotion_base).toEqual('hr');
  });
});
