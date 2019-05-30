import React from 'react';

import { mount, shallow } from 'enzyme';
import withTheme from '../withTheme';

import ArrowCircleDown from '../../src/bolts/icons/arrow-circle-down';
import ArrowCircleLeft from '../../src/bolts/icons/arrow-circle-left';
import ArrowCircleRight from '../../src/bolts/icons/arrow-circle-right';
import ArrowCircleUp from '../../src/bolts/icons/arrow-circle-up';
import CheckBadge from '../../src/bolts/icons/check-badge';
import CheckCircle from '../../src/bolts/icons/check-circle';
import CheckShield from '../../src/bolts/icons/check-shield';
import CrossBadge from '../../src/bolts/icons/cross-badge';
import CrossCircle from '../../src/bolts/icons/cross-circle';
import Cubes from '../../src/bolts/icons/cubes';
import ExclamationCircle from '../../src/bolts/icons/exclamation-circle';
import Expand from '../../src/bolts/icons/expand';
import MoonStars from '../../src/bolts/icons/moon-stars';
import PasswordReset from '../../src/bolts/icons/password-reset';
import PlusCircle from '../../src/bolts/icons/plus-circle';
import QuestionBadge from '../../src/bolts/icons/question-badge';
import Search from '../../src/bolts/icons/search';
import SignOut from '../../src/bolts/icons/sign-out';
import Spinner from '../../src/bolts/icons/spinner';
import Sun from '../../src/bolts/icons/sun';
import User from '../../src/bolts/icons/user';
import UserCircle from '../../src/bolts/icons/user-circle';

[
  ['ArrowCircleDown', ArrowCircleDown ],
  ['ArrowCircleLeft', ArrowCircleLeft ],
  ['ArrowCircleRight', ArrowCircleRight ],
  ['ArrowCircleUp', ArrowCircleUp ],
  ['CheckBadge', CheckBadge ],
  ['CheckCircle', CheckCircle ],
  ['CheckShield', CheckShield ],
  ['CrossBadge', CrossBadge ],
  ['CrossCircle', CrossCircle ],
  ['Cubes', Cubes ],
  ['ExclamationCircle', ExclamationCircle ],
  ['Expand', Expand ],
  ['MoonStars', MoonStars ],
  ['PasswordReset', PasswordReset ],
  ['PlusCircle', PlusCircle ],
  ['QuestionBadge', QuestionBadge ],
  ['Search', Search ],
  ['SignOut', SignOut ],
  ['Spinner', Spinner ],
  ['Sun', Sun ],
  ['UserCircle', UserCircle ],
  ['User', User ],
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
