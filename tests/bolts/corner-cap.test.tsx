import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import CornerCap, { CornerCapVerification } from '../../src/bolts/content/corner-cap';

describe('Corner Cap', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <CornerCap />
      </div>,
    );
    // @ts-ignore
    expect(wrapper.find(CornerCap).name()).toEqual('CornerCap');
  });

  it('Can mount with theme', () => {
    const wrapper = mount(withTheme(<CornerCap />));
    // @ts-ignore
    expect(wrapper.find(CornerCap).name()).toEqual('CornerCap');
  });

  it('Can handle click', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<CornerCap onClick={onClickMock} />);
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Can render unverified', () => {
    const wrapper = mount(withTheme(<CornerCap verification={CornerCapVerification.UNVERIFIED} />));
    expect(wrapper.find('title').text()).toEqual('Unverified Inspection');
  });

  it('Can render verified', () => {
    const wrapper = mount(withTheme(<CornerCap verification={CornerCapVerification.VERIFIED} />));
    expect(wrapper.find('title').text()).toEqual('Verified Inspection');
  });

  it('Can render rejected', () => {
    const wrapper = mount(withTheme(<CornerCap verification={CornerCapVerification.REJECTED} />));
    expect(wrapper.find('title').text()).toEqual('Rejected Inspection');
  });
});
