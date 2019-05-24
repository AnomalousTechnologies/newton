import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Sub from '../../src/bolts/typography/sub';

describe('Bolt: Sub', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Sub>My Sub</Sub>
      </div>,
    );
    expect(wrapper.find(Sub).text()).toEqual('My Sub');
    // @ts-ignore
    expect(wrapper.find(Sub).type().__emotion_base).toEqual('sub');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Sub>My Sub</Sub>));
    expect(wrapper.find(Sub).text()).toEqual('My Sub');
  });
});
