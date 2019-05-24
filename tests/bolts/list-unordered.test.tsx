import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import ListItem from '../../src/bolts/content/list-item';
import ListUnordered from '../../src/bolts/content/list-unordered';

describe('Bolt: ListUnordered', () => {
  it('Can render list', () => {
    const wrapper = shallow(
      <div>
        <ListUnordered />
      </div>,
    );
    // @ts-ignore
    expect(wrapper.find(ListUnordered).type().__emotion_base).toEqual('ul');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme((
      <ListUnordered>
        <ListItem>Example</ListItem>
      </ListUnordered>
    )));
    expect(wrapper.find(ListItem).text()).toEqual('Example');
  });
});
