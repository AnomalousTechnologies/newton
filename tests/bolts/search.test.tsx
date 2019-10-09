import React from 'react';

import { mount, shallow } from 'enzyme';

import SearchIcon from '../../src/bolts/icons/search';
import SpinnerIcon from '../../src/bolts/icons/spinner';

import Search from '../../src/bolts/inputs/search';
import withTheme from '../withTheme';

describe('Bolt: Search', () => {
  it('Can render input', () => {
    const wrapper = shallow(
      <div><Search /></div>,
    );
    expect(wrapper.find(Search).length).toBe(1);
  });

  it('Can mount input', () => {
    const wrapper = mount(withTheme(
      <div><Search /></div>,
    ));
    expect(wrapper.find(Search).length).toBe(1);
  });

  it('Renders default icon', () => {
    const wrapper = mount(withTheme(
      <div><Search /></div>,
    ));
    expect(wrapper.find(SearchIcon).length).toBe(1);
  });

  it('Renders spinner icon when searching', () => {
    const wrapper = mount(withTheme(
      <div><Search isSearching /></div>,
    ));
    expect(wrapper.find(SpinnerIcon).length).toBe(1);
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
