import React from 'react';

import { shallow } from 'enzyme';

import Search from '../../src/bolts/inputs/search';

describe('Bolt: Search', () => {
  it('Can render input', () => {
    const wrapper = shallow(
      <div><Search /></div>,
    );
    expect(wrapper.find(Search).length).toBe(1);
  });

  it('Can handle change', () => {
    const changeStub = jest.fn();
    const wrapper = shallow(
      <div>
        <Search onChange={changeStub} />
      </div>,
    );
    wrapper.find(Search).simulate('change');
    expect(changeStub).toHaveBeenCalled();
  });
});
