import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Xsmall from '../../src/bolts/typography/xsmall';

describe('Bolt: Xsmall', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Xsmall>My Xsmall</Xsmall>
      </div>,
    );
    expect(wrapper.find(Xsmall).text()).toEqual('My Xsmall');
    // @ts-ignore
    expect(wrapper.find(Xsmall).type().__emotion_base).toEqual('small');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Xsmall>My Xsmall</Xsmall>));
    expect(wrapper.find(Xsmall).text()).toEqual('My Xsmall');
  });
});
