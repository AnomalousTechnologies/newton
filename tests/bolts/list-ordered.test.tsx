import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import ListItem from '../../src/bolts/list-item';
import ListOrdered from '../../src/bolts/list-ordered';

describe('Bolt: ListOrdered', () => {
  it('Can render list', () => {
    const wrapper = shallow(
      <div>
        <ListOrdered />
      </div>,
    );
    // @ts-ignore
    expect(wrapper.find(ListOrdered).type().__emotion_base).toEqual('ol');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme((
      <ListOrdered>
        <ListItem>Example</ListItem>
      </ListOrdered>
    )));
    expect(wrapper.find(ListItem).text()).toEqual('Example');
  });
});
