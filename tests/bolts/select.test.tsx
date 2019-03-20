import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Select from '../../src/bolts/select';

describe('Bolt: Select', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Select>My Select</Select>
      </div>,
    );
    expect(wrapper.find(Select).text()).toEqual('My Select');
    // @ts-ignore
    expect(wrapper.find(Select).type().__emotion_base).toEqual('select');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Select>My Select</Select>));
    expect(wrapper.find(Select).text()).toEqual('My Select');
  });
});
