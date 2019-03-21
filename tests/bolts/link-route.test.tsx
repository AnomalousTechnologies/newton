import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import LinkRoute from '../../src/bolts/link-route';

describe('Bolt: LinkRoute', () => {
  it('Can render link', () => {
    const wrapper = shallow(
      <div>
        <LinkRoute to="/">My LinkRoute</LinkRoute>
      </div>,
    );
    expect(wrapper.find(LinkRoute).text()).toContain('My LinkRoute');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme((
      <StaticRouter>
        <LinkRoute to="/">My LinkRoute</LinkRoute>
      </StaticRouter>
    )));
    expect(wrapper.find(LinkRoute).text()).toEqual('My LinkRoute');
  });
});
