import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Avatar from '../../src/bolts/content/avatar';

describe('Bolt: Avatar', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Avatar name="Matt Davies" />
      </div>,
    );
    expect(wrapper.find(Avatar)).toBeTruthy();
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<Avatar name="Matt Davies" />));
    expect(wrapper.find(Avatar)).toBeTruthy();
  });

  it('Can handle click', () => {
    const clickStub = jest.fn();
    const wrapper = shallow(
      <div>
        <Avatar name="Matt Davies" onClick={clickStub} />
      </div>,
    );
    wrapper.find(Avatar).simulate('click');
    expect(clickStub).toHaveBeenCalled();
  });
});
