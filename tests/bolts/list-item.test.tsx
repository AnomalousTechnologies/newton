import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import ListItem from '../../src/bolts/content/list-item';

describe('Bolt: ListItem', () => {
  it('Can render list item', () => {
    const wrapper = shallow(
      <div>
        <ListItem>My List Item</ListItem>
      </div>,
    );
    expect(wrapper.find(ListItem).text()).toContain('My List Item');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<ListItem>My List Item</ListItem>));
    expect(wrapper.find(ListItem).text()).toEqual('My List Item');
  });
});
