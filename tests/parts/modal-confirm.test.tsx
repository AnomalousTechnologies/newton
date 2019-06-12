import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import { CancelIconButton } from '../../src/bolts/inputs/button';
import P from '../../src/bolts/typography/p';
import Modal from '../../src/parts/modal-confirm';

describe('Part: Modal Confirm', () => {
  it('Can accept className', () => {
    const wrapper = mount(withTheme(
      <Modal
        className="bar"
        labelConfirm="foo"
        labelReject="foo"
        onConfirm={() => undefined}
        onReject={() => undefined}
      />,
    ));
    expect(wrapper.find('div').at(0).prop('className')).toContain('bar');
  });

  it('Can render content', () => {
    const wrapper = mount(withTheme(
      <Modal
        labelConfirm="foo"
        labelReject="foo"
        onConfirm={() => undefined}
        onReject={() => undefined}
      >
        This is a modal
      </Modal>,
    ));
    expect(wrapper.find(P).text()).toEqual('This is a modal');
  });

  it('Can render confirm and deny buttons', () => {
    const wrapper = mount(withTheme(
      <Modal
        labelConfirm="foo"
        labelReject="bar"
        onConfirm={() => undefined}
        onReject={() => undefined}
      >
        This is a modal
      </Modal>,
    ));
    expect(wrapper.find('button').at(0).text()).toEqual('foo');
    expect(wrapper.find('button').at(1).text()).toEqual('bar');
  });

  it('Can handle confirm button click', () => {
    const confirmMock = jest.fn();
    const rejectMock = jest.fn();
    const wrapper = mount(withTheme(
      <Modal
        labelConfirm="My Action"
        labelReject="My Action"
        onConfirm={confirmMock}
        onReject={rejectMock}
      >
        This is a modal
      </Modal>,
    ));
    wrapper.find('button').at(0).simulate('click');
    expect(confirmMock).toHaveBeenCalledTimes(1);
    expect(rejectMock).not.toHaveBeenCalled();
  });

  it('Can handle reject button click', () => {
    const confirmMock = jest.fn();
    const rejectMock = jest.fn();
    const wrapper = mount(withTheme(
      <Modal
        labelConfirm="My Action"
        labelReject="My Action"
        onConfirm={confirmMock}
        onReject={rejectMock}
      >
        This is a modal
      </Modal>,
    ));
    wrapper.find('button').at(1).simulate('click');
    expect(confirmMock).not.toHaveBeenCalled();
    expect(rejectMock).toHaveBeenCalledTimes(1);
  });

  it('Can handle cancel button click', () => {
    const confirmMock = jest.fn();
    const rejectMock = jest.fn();
    const cancelMock = jest.fn();
    const wrapper = mount(withTheme(
      <Modal
        labelConfirm="My Action"
        labelReject="My Action"
        onCancel={cancelMock}
        onConfirm={confirmMock}
        onReject={rejectMock}
      >
        This is a modal
      </Modal>,
    ));
    wrapper.find(CancelIconButton).simulate('click');
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });
});
