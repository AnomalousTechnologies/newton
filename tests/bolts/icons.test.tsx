import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import CheckCircleIcon from '../../src/bolts/icons/check-circle';
import CrossCircleIcon from '../../src/bolts/icons/cross-circle';
import SpinnerIcon from '../../src/bolts/icons/spinner';
import UserIcon from '../../src/bolts/icons/user';

[
  ['CheckCircle', CheckCircleIcon],
  ['CrossCircle', CrossCircleIcon],
  ['Spinner', SpinnerIcon],
  ['User', UserIcon],
].forEach(([ name, Icon ]) => {
  describe(`Icons: ${name}`, () => {
    it('Can render icon', () => {
      const wrapper = shallow(
        <div>
          <Icon />
        </div>,
      );
      // @ts-ignore
      expect(wrapper.find(Icon).name()).toEqual('Icon');
    });

    it('Can mount with theme', () => {
      const wrapper = mount(withTheme(<Icon />));
      // @ts-ignore
      expect(wrapper.find(Icon).name()).toEqual('Icon');
    });
  });
});
