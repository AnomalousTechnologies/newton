import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import Button from '../../src/bolts/inputs/button';
import P from '../../src/bolts/typography/p';
import Modal from '../../src/parts/modal-action';

describe('Part: Modal Action', () => {
  it('Can accept className', () => {
    const wrapper = mount(withTheme(
      <Modal
        className="bar"
        label="foo"
        onAction={() => undefined}
      />,
    ));
    expect(wrapper.find('div').at(0).prop('className')).toContain('bar');
  });

  it('Can render content', () => {
    const wrapper = mount(withTheme(
      <Modal label="foo" onAction={() => undefined}>
        This is a modal
      </Modal>,
    ));
    expect(wrapper.find(P).text()).toEqual('This is a modal');
  });

  it('Can render action button', () => {
    const wrapper = mount(withTheme(
      <Modal label="My Action" onAction={() => undefined}>
        This is a modal
      </Modal>,
      ));
    expect(wrapper.find(Button).text()).toEqual('My Action');
  });

  it('Can handle action button click', () => {
    const actionMock = jest.fn();
    const wrapper = mount(withTheme(
      <Modal label="My Action" onAction={actionMock}>
        This is a modal
      </Modal>,
      ));
    wrapper.find(Button).simulate('click');
    expect(actionMock).toHaveBeenCalledTimes(1);
  });
});
