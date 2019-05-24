import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Link from '../../src/bolts/content/link';

describe('Bolt: Link', () => {
  it('Can render link', () => {
    const wrapper = shallow(
      <div>
        <Link>My Link</Link>
      </div>,
    );
    expect(wrapper.find(Link).text()).toContain('My Link');
    // @ts-ignore
    expect(wrapper.find(Link).type().__emotion_base).toEqual('a');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Link>My Link</Link>));
    expect(wrapper.find(Link).text()).toEqual('My Link');
  });
});
