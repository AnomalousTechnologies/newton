import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import ListItem from '../../src/bolts/content/list-item';
import ListUnordered from '../../src/bolts/content/list-unordered';

describe('Bolt: ListUnordered', () => {
  it('Can mount with theme', () => {
    const wrapper = mount(withTheme((
      <ListUnordered>
        <ListItem>Example</ListItem>
      </ListUnordered>
    )));
    expect(wrapper.find(ListItem).text()).toEqual('Example');
  });
});
