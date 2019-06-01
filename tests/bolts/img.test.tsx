import React from 'react';

import { shallow } from 'enzyme';

import Img from '../../src/bolts/content/img';

describe('Bolt: Img', () => {
  it('Can render img', () => {
    const wrapper = shallow(
      <div>
        <Img />
      </div>,
    );
    expect(wrapper.find(Img).length).toEqual(1);
  });
});
