import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Select from '../../src/bolts/inputs/select';

describe('Bolt: Select', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Select>My Select</Select>
      </div>,
    );
    expect(wrapper.find(Select).text()).toEqual('My Select');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Select>My Select</Select>));
    expect(wrapper.find(Select).text()).toEqual('My Select');
  });
});
