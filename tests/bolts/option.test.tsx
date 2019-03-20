import React from 'react';

import { shallow } from 'enzyme';

import Option from '../../src/bolts/option';

describe('Bolt: Option', () => {
  it('Can render option', () => {
    const wrapper = shallow(
      <div>
        <Option>My Option</Option>
      </div>,
    );
    expect(wrapper.find(Option).text()).toContain('My Option');
    // @ts-ignore
    expect(wrapper.find(Option).type().__emotion_base).toEqual('option');
  });
});
