import React from 'react';

import { shallow } from 'enzyme';

import Label from '../../src/bolts/label';

describe('Bolt: Label', () => {
  it('Can render label', () => {
    const wrapper = shallow(
      <div>
        <Label>My Label</Label>
      </div>,
    );
    expect(wrapper.find(Label).text()).toContain('My Label');
  });
});
