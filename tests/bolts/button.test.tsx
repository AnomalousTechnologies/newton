import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Icon from '../../src/bolts/icons/user';
import Button, { ButtonSize, ButtonType, CancelIconButton } from '../../src/bolts/inputs/button';

describe('Bolt: Button', () => {
  it('Can render', () => {
    const wrapper = shallow(
      <div>
        <Button>My Button</Button>
      </div>,
    );
    expect(wrapper.find(Button).text()).toEqual('My Button');
  });

  it('Can render with Icon', () => {
    const wrapper = shallow(
      <div>
        <Button icon={<Icon />}>My Button</Button>
      </div>,
    );
    expect(wrapper.find(Button).text()).toEqual('My Button');
  });

  it('Can render when loading', () => {
    const wrapper = shallow(
      <div>
        <Button isLoading>My Button</Button>
      </div>,
    );
    expect(wrapper.find(Button).text()).toEqual('My Button');
  });

  it('Can mount small with theme', () => {
    const wrapper = mount(withTheme(<Button size={ButtonSize.SMALL} type={ButtonType.SUCCESS}>My Button</Button>));
    expect(wrapper.find(Button).text()).toEqual('My Button');
  });

  it('Can mount large with theme', () => {
    const wrapper = mount(withTheme(<Button size={ButtonSize.LARGE} type={ButtonType.DANGER}>My Button</Button>));
    expect(wrapper.find(Button).text()).toEqual('My Button');
  });

  it('Can mount loading with theme', () => {
    const wrapper = mount(withTheme(<Button isLoading size={ButtonSize.LARGE}>My Button</Button>));
    expect(wrapper.find(Button).text()).toEqual('My Button');
  });

  it('Can mount icon button with theme', () => {
    const wrapper = mount(withTheme(<Button icon={<Icon />}>My Button</Button>));
    expect(wrapper.find(Button).text()).toEqual('My Button');
  });

  it('Can mount cancel button with theme', () => {
    const wrapper = mount(withTheme(<CancelIconButton>My Button</CancelIconButton>));
    expect(wrapper.find(CancelIconButton).length).toEqual(1);
  });

  it('Can handle click', () => {
    const clickStub = jest.fn();
    const wrapper = shallow(
      <div>
        <Button onClick={clickStub}>My Button</Button>
      </div>,
    );
    wrapper.find(Button).simulate('click');
    expect(clickStub).toHaveBeenCalled();
  });
});
