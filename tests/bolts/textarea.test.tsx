import React from 'react';

import { shallow } from 'enzyme';

import Textarea from '../../src/bolts/inputs/textarea';

describe('Bolt: Textarea', () => {
  it('Can render textarea', () => {
    const wrapper = shallow(
      <div><Textarea /></div>,
    );
    expect(wrapper.find(Textarea).length).toBe(1);
  });

  it('Can handle change', () => {
    const changeStub = jest.fn();
    const wrapper = shallow(
      <div>
        <Textarea onChange={changeStub} />
      </div>,
    );
    wrapper.find(Textarea).simulate('change');
    expect(changeStub).toHaveBeenCalled();
  });
});
