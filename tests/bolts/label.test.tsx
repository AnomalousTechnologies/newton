import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Label from '../../src/bolts/content/label';

describe('Bolt: Label', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Label>My Label</Label>
      </div>,
    );
    expect(wrapper.find(Label).text()).toEqual('My Label');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Label>My Label</Label>));
    expect(wrapper.find(Label).text()).toEqual('My Label');
  });
});
