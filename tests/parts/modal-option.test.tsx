import React from 'react';

import { mount } from 'enzyme';
import withTheme from '../withTheme';

import Button from '../../src/bolts/inputs/button';
import P from '../../src/bolts/typography/p';
import Modal from '../../src/parts/modal-option';

describe('Part: Modal Option', () => {
  it('Can accept className', () => {
    const wrapper = mount(withTheme(
      <Modal
        className="bar"
        buttons={[]}
      />,
    ));
    expect(wrapper.find('div').at(0).prop('className')).toContain('bar');
  });

  it('Can render content', () => {
    const wrapper = mount(withTheme(
      <Modal buttons={[]}>
        This is a modal
      </Modal>,
    ));
    expect(wrapper.find(P).text()).toEqual('This is a modal');
  });

  it('Can render action buttons', () => {
    const wrapper = mount(withTheme(
      <Modal
        buttons={[
          <Button onClick={() => undefined} />,
          <Button onClick={() => undefined} />,
        ]}
      >
        This is a modal
      </Modal>,
      ));
    expect(wrapper.find(Button).length).toEqual(2);
  });
});
