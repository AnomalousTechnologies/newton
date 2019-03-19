import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Code from '../../src/bolts/code';

describe('Bolt: Code', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Code>My Code</Code>
      </div>,
    );
    expect(wrapper.find(Code).text()).toEqual('My Code');
    // @ts-ignore
    expect(wrapper.find(Code).type().__emotion_base).toEqual('code');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Code>My Code</Code>));
    expect(wrapper.find(Code).text()).toEqual('My Code');
  });
});
