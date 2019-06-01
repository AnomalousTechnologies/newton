import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import ListItem from '../../src/bolts/content/list-item';
import ListOrdered from '../../src/bolts/content/list-ordered';

describe('Bolt: ListOrdered', () => {
  it('Can mount with theme', () => {
    const wrapper = mount(withTheme((
      <ListOrdered>
        <ListItem>Example</ListItem>
      </ListOrdered>
    )));
    expect(wrapper.find(ListItem).text()).toEqual('Example');
  });
});
