import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import FlashMessage, { FlashMessage as Message } from '../../src/parts/flash-message';

describe('Part: Flash Message', () => {
  it('Can accept className', () => {
    const wrapper = mount(withTheme(
      <Message className="bar">Flash Me</Message>,
    ));
    expect(wrapper.find('div').prop('className')).toContain('bar');
  });

  it('Can render flash message', () => {
    const wrapper = shallow(
      <Message>Flash Me</Message>,
    );
    expect(wrapper.text()).toBe('Flash Me');
  });

  it('Can render close element', () => {
    const Close = () => <div>Close</div>;
    const wrapper = shallow(
      <Message closeComponent={Close}>Flash Me</Message>,
    );
    expect(wrapper.find(Close)).toBeTruthy();
  });

  it('Can make message disappear by clicking cross', () => {
    const closeStub = jest.fn();
    const Close = () => <div>Close</div>;
    const wrapper = shallow(
      <Message closeComponent={Close} onClose={closeStub}>Flash Me</Message>,
    );
    wrapper.find(Close).simulate('click');
    expect(closeStub).toHaveBeenCalled();
  });

  it('Can mount message to parent element', () => {
    const parentMock = {
      appendChild: jest.fn(),
    };
    // @ts-ignore
    const wrapper = shallow(<FlashMessage parent={parentMock}>Flash Me</FlashMessage>);
    // @ts-ignore
    wrapper.instance().componentDidMount();
    expect(parentMock.appendChild).toHaveBeenCalled();
  });

  it('Can unmount message from parent element', () => {
    const parentMock = {
      appendChild: jest.fn(),
      removeChild: jest.fn(),
    };
    // @ts-ignore
    const wrapper = shallow(<FlashMessage parent={parentMock}>Flash Me</FlashMessage>);
    // @ts-ignore
    wrapper.instance().componentWillUnmount();
    expect(parentMock.removeChild).toHaveBeenCalled();
  });

  it('Can handle close', () => {
    const parentMock = {
      appendChild: jest.fn(),
      removeChild: jest.fn(),
    };
    // @ts-ignore
    const wrapper = shallow(<FlashMessage parent={parentMock}>Flash Me</FlashMessage>);
    wrapper.find(Message).simulate('close');
    expect(parentMock.removeChild).toHaveBeenCalled();
  });
});
