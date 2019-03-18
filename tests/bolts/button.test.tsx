import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import Button from '../../src/bolts/button';

describe('Bolt: Button', () => {
  it('Can shallow render button', () => {
    const wrapper = shallow(
      <div>
        <Button>My Button</Button>
      </div>,
    );
    expect(wrapper.find(Button).text()).toContain('My Button');
  });

  it('Can mount button with theme', () => {
    const wrapper = mount(withTheme(<Button>My Button</Button>));
    expect(wrapper.find(Button).text()).toContain('My Button');
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
