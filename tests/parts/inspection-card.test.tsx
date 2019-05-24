import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import InspectionCard, { InspectionStatus } from '../../src/parts/inspection-card';

describe('Part: Flash Message', () => {
  it('Can accept className', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date()}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Rotor Blade"
        partNumber="95678230"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('div').at(0).prop('className')).toContain('bar');
  });

  it('Can render content', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Rotor Blade"
        partNumber="95678230"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('h4').text()).toEqual('#95678230 - Rotor Blade');
    expect(wrapper.find('small').text()).toEqual('20 Feb 2019 at 12:00 am | Stephanie Lawrence');
    expect(wrapper.find('Avatar').length).toEqual(1);
  });

  it('Can render fail label', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Rotor Blade"
        partNumber="95678230"
        status={InspectionStatus.FAIL}
      />,
    ));
    expect(wrapper.find('FailLabel').length).toEqual(1);
  });

  it('Can render pass label', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Rotor Blade"
        partNumber="95678230"
        status={InspectionStatus.PASS}
      />,
    ));
    expect(wrapper.find('PassLabel').length).toEqual(1);
  });

  it('Can render waiting label', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Rotor Blade"
        partNumber="95678230"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('WaitingLabel').length).toEqual(1);
  });
});
