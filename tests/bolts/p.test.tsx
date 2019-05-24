import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import P from '../../src/bolts/typography/p';

describe('Bolt: P', () => {
  it('Can render p', () => {
    const wrapper = shallow(
      <div>
        <P>My Paragraph</P>
      </div>,
    );
    expect(wrapper.find(P).text()).toContain('My Paragraph');
    // @ts-ignore
    expect(wrapper.find(P).type().__emotion_base).toEqual('p');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<P>My Paragraph</P>));
    expect(wrapper.find(P).text()).toEqual('My Paragraph');
  });
});
