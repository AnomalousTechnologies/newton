import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import Input from '../../src/bolts/input';
import Label from '../../src/bolts/label';
import Textarea from '../../src/bolts/textarea';
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
    expect(wrapper.find(Label).text()).toContain('My Label');
    expect(wrapper.find(Label).prop('htmlFor')).toContain('a-text-input-');
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
});
