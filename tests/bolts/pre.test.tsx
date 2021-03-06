import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Pre from '../../src/bolts/typography/pre';

describe('Bolt: Pre', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Pre>My Pre</Pre>
      </div>,
    );
    expect(wrapper.find(Pre).text()).toEqual('My Pre');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Pre>My Pre</Pre>));
    expect(wrapper.find(Pre).text()).toEqual('My Pre');
  });
});
