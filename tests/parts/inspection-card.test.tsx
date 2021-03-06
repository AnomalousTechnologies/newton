import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import CheckBadgeIcon from '../../src/bolts/icons/check-badge';
import CrossBadgeIcon from '../../src/bolts/icons/cross-badge';
import InspectionCard, { InspectionStatus, InspectionVerification } from '../../src/parts/inspection-card';

describe('Part: Inspection Card', () => {
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
        partNumber="Part-Number"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('h4').text()).toEqual('Rotor Blade | Part. Part-Number');
    expect(wrapper.find('small').text()).toEqual('20 Feb 2019 at 12:00 am | Stephanie Lawrence');
    expect(wrapper.find('Avatar').length).toEqual(1);
  });

  it('Can render part name without number', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Rotor Blade Only"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('h4').text()).toEqual('Rotor Blade Only');
  });

  it('Can render part name with serial', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Part Name"
        partSerial="Serial-Number"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('h4').text()).toEqual('Part Name | Serial. Serial-Number');
  });

  it('Will render serial over number', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Part Name"
        partNumber="Part-Number"
        partSerial="Serial-Number"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('h4').text()).toEqual('Part Name | Serial. Serial-Number');
  });

  it('Will render generic if no name of serial provided with number', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partNumber="Part-Number"
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('h4').text()).toEqual('Generic Part | Part. Part-Number');
  });

  it('Can render no part attached', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        status={InspectionStatus.WAITING}
      />,
    ));
    expect(wrapper.find('h4').text()).toEqual('No Part Attached');
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

  it('Can render unsure label', () => {
    const wrapper = mount(withTheme(
      <InspectionCard
        className="bar"
        date={new Date(2019, 1, 20, 0, 0, 0)}
        inspectorAvatarSrc="https://randomuser.me/api/portraits/women/64.jpg"
        inspectorName="Stephanie Lawrence"
        onClick={() => undefined}
        partName="Rotor Blade"
        partNumber="95678230"
        status={InspectionStatus.UNSURE}
      />,
    ));
    expect(wrapper.find('UnsureLabel').length).toEqual(1);
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

  it('Can render verified badge', () => {
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
        verification={InspectionVerification.VERIFIED}
      />,
    ));
    expect(wrapper.find(CheckBadgeIcon).length).toEqual(1);
  });

  it('Can render rejected badge', () => {
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
        verification={InspectionVerification.REJECTED}
      />,
    ));
    expect(wrapper.find(CrossBadgeIcon).length).toEqual(1);
  });
});
