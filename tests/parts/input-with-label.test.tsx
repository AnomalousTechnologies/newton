import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import InputLarge from '../../src/bolts/inputs/input-large';
import Input from '../../src/bolts/inputs/input-small';
import Textarea from '../../src/bolts/inputs/textarea';
import InputWithLabel from '../../src/parts/input-with-label';

describe('Part: Input With Label', () => {
  it('Can accept className', () => {
    const wrapper = mount(withTheme(
      <InputWithLabel
        className="bar"
        label="My Label"
        name="Foo"
        onChange={() => undefined}
      />,
    ));
    expect(wrapper.find('div').prop('className')).toContain('bar');
  });

  it('Can render label', () => {
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={() => undefined}
      />,
    ));
    expect(wrapper.find('label').text()).toContain('My Label');
    expect(wrapper.find('label').prop('htmlFor')).toContain('a-text-input-');
  });

  it('Can render input', () => {
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={() => undefined}
        placeholder="Bar"
        type="text"
        value="example"
      />,
    ));
    expect(wrapper.find(Input).prop('name')).toEqual('Foo');
    expect(wrapper.find(Input).prop('placeholder')).toEqual('Bar');
    expect(wrapper.find(Input).prop('type')).toEqual('text');
    expect(wrapper.find(Input).prop('value')).toEqual('example');
  });

  it('Can render large input', () => {
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        isLarge
        name="Foo"
        onChange={() => undefined}
        placeholder="Bar"
        type="text"
        value="example"
      />,
    ));
    expect(wrapper.find(InputLarge).prop('name')).toEqual('Foo');
    expect(wrapper.find(InputLarge).prop('placeholder')).toEqual('Bar');
    expect(wrapper.find(InputLarge).prop('type')).toEqual('text');
    expect(wrapper.find(InputLarge).prop('value')).toEqual('example');
  });

  it('Can handle input change', () => {
    const changeStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
      />,
    ));
    wrapper.find(Input).simulate('change');
    expect(changeStub).toHaveBeenCalled();
  });

  it('Can handle input keypress', () => {
    const changeStub = jest.fn();
    const keyPressStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
        onKeyPress={keyPressStub}
      />,
    ));
    wrapper.find(Input).simulate('keypress');
    expect(keyPressStub).toHaveBeenCalled();
  });

  it('Can handle input keypress without callback', () => {
    const changeStub = jest.fn();
    const keyPressStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
      />,
    ));
    wrapper.find(Input).simulate('keypress');
    expect(keyPressStub).not.toHaveBeenCalled();
  });

  it('Can handle input enter keypress', () => {
    const changeStub = jest.fn();
    const keyPressStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
        onEnterKeyPress={keyPressStub}
      />,
    ));
    wrapper.find(Input).simulate('keypress', { key: 'Enter' });
    expect(keyPressStub).toHaveBeenCalled();
  });

  it('Can render textarea', () => {
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={() => undefined}
        placeholder="Bar"
        type="textarea"
        value="example"
      />,
    ));
    expect(wrapper.find(Textarea).prop('name')).toEqual('Foo');
    expect(wrapper.find(Textarea).prop('placeholder')).toEqual('Bar');
    expect(wrapper.find(Textarea).prop('rows')).toEqual(10);
    expect(wrapper.find(Textarea).prop('value')).toEqual('example');
  });

  it('Can handle textarea change', () => {
    const changeStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
        type="textarea"
      />,
    ));
    wrapper.find(Textarea).simulate('change');
    expect(changeStub).toHaveBeenCalled();
  });

  it('Can handle textarea keypress', () => {
    const changeStub = jest.fn();
    const keyPressStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
        onKeyPress={keyPressStub}
        type="textarea"
      />,
    ));
    wrapper.find(Textarea).simulate('keypress');
    expect(keyPressStub).toHaveBeenCalled();
  });

  it('Can handle textarea keypress without callback', () => {
    const changeStub = jest.fn();
    const keyPressStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
        type="textarea"
      />,
    ));
    wrapper.find(Textarea).simulate('keypress');
    expect(keyPressStub).not.toHaveBeenCalled();
  });

  it('Can handle textarea enter keypress', () => {
    const changeStub = jest.fn();
    const keyPressStub = jest.fn();
    const wrapper = mount(withTheme(
      <InputWithLabel
        label="My Label"
        name="Foo"
        onChange={changeStub}
        onEnterKeyPress={keyPressStub}
        type="textarea"
      />,
    ));
    wrapper.find(Textarea).simulate('keypress', { key: 'Enter' });
    expect(keyPressStub).toHaveBeenCalled();
  });
});
