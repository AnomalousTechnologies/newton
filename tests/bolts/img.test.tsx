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
    // @ts-ignore
    expect(wrapper.find(Img).type().__emotion_base).toEqual('img');
  });
});
