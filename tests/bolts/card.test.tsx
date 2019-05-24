import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Card from '../../src/bolts/content/card';

describe('Bolt: Card', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Card>My Card</Card>
      </div>,
    );
    expect(wrapper.find(Card).text()).toEqual('My Card');
    // @ts-ignore
    expect(wrapper.find(Card).type().__emotion_base).toEqual('div');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Card>My Card</Card>));
    expect(wrapper.find(Card).text()).toEqual('My Card');
  });
});
