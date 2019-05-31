import React from 'react';

import { shallow } from 'enzyme';

import Input from '../../src/bolts/inputs/input-small';

describe('Bolt: Input Small', () => {
  it('Can render input', () => {
    const wrapper = shallow(
      <div><Input /></div>,
    );
    expect(wrapper.find(Input).length).toBe(1);
  });

  it('Can handle change', () => {
    const changeStub = jest.fn();
    const wrapper = shallow(
      <div>
        <Input onChange={changeStub} />
      </div>,
    );
    wrapper.find(Input).simulate('change');
    expect(changeStub).toHaveBeenCalled();
  });
});
